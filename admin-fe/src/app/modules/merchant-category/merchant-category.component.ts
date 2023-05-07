import { Component, ViewChild } from '@angular/core';
import { Merchant_Category } from './merchant';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MerchantService } from './merchant.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-merchant-category',
  templateUrl: './merchant-category.component.html',
  styleUrls: ['./merchant-category.component.scss']
})
export class MerchantCategoryComponent {

  public merchantCatData = new MatTableDataSource<Merchant_Category>();
  merchantCat: Merchant_Category = new Merchant_Category;
  merchantCatCol: string[] = ['category_id' , 'category_name' , 'action'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private merchantService: MerchantService,
    private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit(): void{ 
    this.getMerchCat();
  }

  getMerchCat(){
    this.merchantService.getMerchCatList().subscribe(data =>{
      this.merchantCatData.data = data;
      });
  }


  ngAfterViewInit(){
    this.merchantCatData.sort = this.sort;
    this.merchantCatData.paginator = this.paginator;
  }
  updateCategory(id:String){
    this.router.navigate(['merchant/merchant-update',id]);
  }

  deleteCategory(id:String){
    console.log(id);
    if(confirm("Apakah Anda yakin ingin menghapus kategori jasa ini?")) {
      this.merchantService.deleteMercCat(id).subscribe(data =>
        {
          this.getMerchCat();
          this.toastr.success('Data kategori jasa berhasil dihapus', 'Hapus');
        })
    }
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.merchantCatData.filter = filterValue.trim().toLowerCase();
  }

  saveCategory(){
    // if(confirm("Apakah Anda yakin ingin mengubah kategori jasa ini?")) {
      this.merchantService.createMercCat(this.merchantCat).subscribe(data =>
        {
          console.log(data);
          // this.toastr.success('Data kategori jasa berhasil diubah', 'Ubah');
        },
        error => console.log(error))
      // }
  }

  goToCategoryList(){
    this.router.navigate(['/merchant'])
    .then(() => {
      window.location.reload();
    });
  }
  
  onSubmit(){
    this.saveCategory();
    this.goToCategoryList();
  }
}
