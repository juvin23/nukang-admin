import { Component, Input } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.scss']
})
export class CityUpdateComponent {
  id!: String;
  city :City = new City;

  constructor(private cityService : CityService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void{
    this.id= this.route.snapshot.params['id'];
    this.cityService.getUserID(this.id).subscribe(data=>{
      console.log(data);
      this.city = data;
      // console.log(this.city.city_id);
      // console.log(this.city.city_name);
    },error => console.log(error));
  
  }

  onUpdate(){
    if(confirm("Apakah Anda yakin ingin mengubah kota ini?")) {
      this.cityService.updateCity(this.id , this.city).subscribe(data =>
      {
        this.goToCityList();
        this.toastr.success('Data kota berhasil diubah', 'Ubah');
      }, 
      error => console.log(error))
    }
  }

  goToCityList(){
    this.router.navigate(['/city'])
  }
}
