import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Faq } from './faq';
import { FaqService } from './faq.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {
  public faqData = new MatTableDataSource<Faq>();
  faq: Faq = new Faq;
  faqColumns: string[] = ['id' , 'question' , 'answer' , 'action'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;

  constructor(private faqService: FaqService,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog){
  }

  ngOnInit(): void{ 
    this.getFaqs();
  }

  getFaqs(){
    this.faqService.getFaqList().subscribe(data =>{
      this.faqData.data = data;
      });
  }

  deleteFaq(id:String){
    if(confirm("Apakah Anda yakin ingin menghapus bantuan ini?")) {
      this.faqService.deleteFaq(id).subscribe(data =>
        {
          this.getFaqs();
          this.toastr.success('Data bantuan berhasil dihapus', 'Hapus');
        })
    }
  }

  createFaq(){
    this.router.navigate(['faq/faq-create']);
  }

  updateFaq(id:String){
    // const modalRef = this.dialog.open(FaqUpdateComponent, {
    //     width: '250px'
    //   });
    //   modalRef.componentInstance.id = id;
    this.router.navigate(['faq/faq-update',id]);
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.faqData.filter = filterValue.trim().toLowerCase();
  }

  saveFaq(){
    this.faqService.createFaq(this.faq).subscribe(data =>
      {
        console.log(data);
      },
      error => console.log(error))
  }

  goToFaqList(){
    this.router.navigate(['/faq'])
    .then(() => {
      window.location.reload();
    });
  }

  ngAfterViewInit(){
    this.faqData.sort = this.sort;
    this.faqData.paginator = this.paginator;
  }

  onSubmit() {
    this.saveFaq();
    this.goToFaqList();
  }

}