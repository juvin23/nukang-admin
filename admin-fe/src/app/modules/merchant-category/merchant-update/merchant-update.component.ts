import { Component } from '@angular/core';
import { Merchant_Category } from '../merchant';
import { MerchantService } from '../merchant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-merchant-update',
  templateUrl: './merchant-update.component.html',
  styleUrls: ['./merchant-update.component.scss']
})
export class MerchantUpdateComponent {
  id!: String;
  merchantCat :Merchant_Category = new Merchant_Category;

  constructor(private merchantService : MerchantService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void{
    this.id= this.route.snapshot.params['id'];
    this.merchantService.getMercCatId(this.id).subscribe(data=>{
      console.log(data);
      this.merchantCat = data;
    },error => console.log(error));
  
  }

  onUpdate(){
    if(confirm("Apakah Anda yakin ingin mengubah kategori jasa ini?")) {
      this.merchantService.updateMercCat(this.id , this.merchantCat).subscribe(data =>
        {
          this.goToMercCat();
          this.toastr.success('Data kategori jasa berhasil diubah', 'Ubah');
        }, 
        error => console.log(error))
    }
  }

  goToMercCat(){
    this.router.navigate(['/merchant'])
  }
}
