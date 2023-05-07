import { Component, Input } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.scss']
})
export class CityCreateComponent {
  id!: String;
  city! :City;

  constructor(private cityService : CityService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void{
    this.city = new City();
  }

  onCreate(){
    if(confirm("Apakah Anda yakin ingin menambah kota ini?")) {
      this.cityService.createCity(this.city).subscribe(data =>
        {
          this.goToCityList();
          this.toastr.success('Data kota berhasil ditambah', 'Tambah');
        }, error => {
          console.log(error);
          this.toastr.error('Data kota gagal ditambah', 'Gagal');
        });
    }
  }

  goToCityList(){
    this.router.navigate(['/city'])
  }
}
