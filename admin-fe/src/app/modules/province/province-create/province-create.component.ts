import { Component, Input } from '@angular/core';
import { Province } from '../province';
import { ProvinceService } from '../province.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-province-create',
  templateUrl: './province-create.component.html',
  styleUrls: ['./province-create.component.scss']
})
export class ProvinceCreateComponent {
  id!: String;
  province! :Province;

  constructor(private provinceService : ProvinceService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void{
    this.province = new Province();
  }

  onCreate(){
    if(confirm("Apakah Anda yakin ingin menambah provinsi ini?")) {
      this.provinceService.createProvince(this.province).subscribe(data =>
        {
          this.goToProvinceList();
          this.toastr.success('Data provinsi berhasil ditambah', 'Tambah');
        }, error => {
          console.log(error);
          this.toastr.error('Data provinsi gagal ditambah', 'Gagal');
        });
    }
  }

  goToProvinceList(){
    this.router.navigate(['/province'])
  }
}
