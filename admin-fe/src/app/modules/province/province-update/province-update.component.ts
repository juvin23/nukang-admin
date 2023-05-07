import { Component, Input } from '@angular/core';
import { Province } from '../province';
import { ProvinceService } from '../province.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-province-update',
  templateUrl: './province-update.component.html',
  styleUrls: ['./province-update.component.scss']
})
export class ProvinceUpdateComponent {
  id!: String;
  province :Province = new Province;

  constructor(private provinceService : ProvinceService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void{
    this.id= this.route.snapshot.params['id'];
    this.provinceService.getUserID(this.id).subscribe(data=>{
      console.log(data);
      this.province = data;
      // console.log(this.province.province_id);
      // console.log(this.province.province_name);
    },error => console.log(error));
  
  }

  onUpdate(){
    if(confirm("Apakah Anda yakin ingin mengubah provinsi ini?")) {
      this.provinceService.updateProvince(this.id , this.province).subscribe(data =>
      {
        this.goToProvinceList();
        this.toastr.success('Data provinsi berhasil diubah', 'Ubah');
      }, 
      error => console.log(error))
    }
  }

  goToProvinceList(){
    this.router.navigate(['/province'])
  }
}
