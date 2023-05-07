import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Merchant } from './merchant';
import { MerchantService } from './merchant.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})

export class MerchantComponent {
  public merchantData = new MatTableDataSource<Merchant>();
  merchant: Merchant = new Merchant;
  merchantColumns: string[] = ['merchant_id' , 'merchant_name' , 'merchant_address', 'merchant_province' , 'merchant_city' , 'merchant_email' , 'merchant_number',  'rating', 'rating_count', 'description' , 'status', 'created_on','edited_by','edited_on','last_login', 'action'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private merchantService: MerchantService,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog){
  }

  ngOnInit(): void{ 
    this.getMerchants();
  }

  getMerchants(){
    this.merchantService.getMerchantList().subscribe(data =>{
      this.merchantData.data = data;
      });
  }

  // deleteMerchant(id:String){
  //   if(confirm("Apakah Anda yakin ingin menghapus penyedia jasa ini?")) {
  //     this.merchantService.deleteMerchant(id).subscribe(data =>
  //       {
  //         this.getMerchants();
  //         this.toastr.success('Data penyedia jasa berhasil dihapus', 'Hapus');
  //       })
  //   }
  // }

  updateMerchantStatus(id: String, status: String){
    if(confirm("Apakah Anda yakin ingin mengubah status penyedia jasa ini?")) {
      this.merchantService.updateMerchantStatus(id, status).subscribe(data =>
        {
          this.getMerchants();
          this.toastr.success('Status penyedia jasa berhasil diubah', 'Ubah');
        })
    } 
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.merchantData.filter = filterValue.trim().toLowerCase();
  }

  saveMerchant(){
    this.merchantService.createMerchant(this.merchant).subscribe(data =>
      {
        console.log(data);
      },
      error => console.log(error))
  }

  goToMerchantList(){
    this.router.navigate(['/merchant'])
    .then(() => {
      window.location.reload();
    });
  }

  ngAfterViewInit(){
    this.merchantData.sort = this.sort;
    this.merchantData.paginator = this.paginator;
  }

  onSubmit() {
    this.saveMerchant();
    this.goToMerchantList();
  }

}