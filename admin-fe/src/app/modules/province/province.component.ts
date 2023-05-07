import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Province } from './province';
import { ProvinceService } from './province.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss']
})

export class ProvinceComponent {
  public provinceData = new MatTableDataSource<Province>();
  province: Province = new Province;
  provinceColumns: string[] = ['province_id' , 'province_name' , 'action'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private provinceService: ProvinceService,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog){
  }

  ngOnInit(): void{ 
    this.getProvinces();
  }

  getProvinces(){
    this.provinceService.getProvinceList().subscribe(data =>{
      this.provinceData.data = data;
      });
  }

  deleteProvince(id:String){
    if(confirm("Apakah Anda yakin ingin menghapus provinsi ini?")) {
      this.provinceService.deleteProvince(id).subscribe(data =>
        {
          this.getProvinces();
          this.toastr.success('Data provinsi berhasil dihapus', 'Hapus');
        })
    }
  }

  createProvince(){
    this.router.navigate(['province/province-create']);
  }

  updateProvince(id:String){
    // const modalRef = this.dialog.open(ProvinceUpdateComponent, {
    //     width: '250px'
    //   });
    //   modalRef.componentInstance.id = id;
    this.router.navigate(['province/province-update',id]);
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.provinceData.filter = filterValue.trim().toLowerCase();
  }

  saveProvince(){
    this.provinceService.createProvince(this.province).subscribe(data =>
      {
        console.log(data);
      },
      error => console.log(error))
  }

  goToProvinceList(){
    this.router.navigate(['/province'])
    .then(() => {
      window.location.reload();
    });
  }

  ngAfterViewInit(){
    this.provinceData.sort = this.sort;
    this.provinceData.paginator = this.paginator;
  }

  onSubmit() {
    this.saveProvince();
    this.goToProvinceList();
  }

}