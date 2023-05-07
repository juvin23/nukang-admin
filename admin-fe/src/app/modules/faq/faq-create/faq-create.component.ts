import { Component, Input } from '@angular/core';
import { Faq } from '../faq';
import { FaqService } from '../faq.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-faq-create',
  templateUrl: './faq-create.component.html',
  styleUrls: ['./faq-create.component.scss']
})
export class FaqCreateComponent {
  id!: String;
  faq! :Faq;

  constructor(private faqService : FaqService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void{
    this.faq = new Faq();
  }

  onCreate(){
    if(confirm("Apakah Anda yakin ingin menambah bantuan ini?")) {
      this.faqService.createFaq(this.faq).subscribe(data =>
        {
          this.goToFaqList();
          this.toastr.success('Data bantuan berhasil ditambah', 'Tambah');
        }, error => {
          console.log(error);
          this.toastr.error('Data bantuan gagal ditambah', 'Gagal');
        });
    }
  }

  goToFaqList(){
    this.router.navigate(['/faq'])
  }
}
