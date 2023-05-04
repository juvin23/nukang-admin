import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { City } from './city';
import { CityService } from './city.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { CityUpdateComponent } from './city-update/city-update.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})

export class CityComponent {
  public cityData = new MatTableDataSource<City>();
  city: City = new City;
  cityColumns: string[] = ['city_id' , 'city_name' , 'action'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private cityService: CityService,
    private router: Router,public dialog: MatDialog){
  }

  ngOnInit(): void{ 
    this.getCitys();
  }

  getCitys(){
    this.cityService.getCityList().subscribe(data =>{
      this.cityData.data = data;
      });
  }

  deleteCity(id:String){
    if(confirm("Are you sure to delete City Data ?")) {
      this.cityService.deleteCity(id).subscribe(data =>
        {
          this.getCitys();
        })
    }
  }

  updateCity(id:String){
    // const modalRef = this.dialog.open(CityUpdateComponent, {
    //     width: '250px'
    //   });
    //   modalRef.componentInstance.id = id;
    this.router.navigate(['city/city-update',id]);
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.cityData.filter = filterValue.trim().toLowerCase();
  }

  saveCity(){
    this.cityService.createCity(this.city).subscribe(data =>
      {
        console.log(data);
      },
      error => console.log(error))
  }

  goToCityList(){
    this.router.navigate(['/city'])
    .then(() => {
      window.location.reload();
    });
  }

  ngAfterViewInit(){
    this.cityData.sort = this.sort;
    this.cityData.paginator = this.paginator;
  }

  onSubmit() {
    this.saveCity();
    this.goToCityList();
  }

}