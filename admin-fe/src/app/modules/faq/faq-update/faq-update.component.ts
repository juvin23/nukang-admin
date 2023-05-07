import { Component, Input } from '@angular/core';
import { Faq } from '../faq';
import { FaqService } from '../faq.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faq-update',
  templateUrl: './faq-update.component.html',
  styleUrls: ['./faq-update.component.scss']
})
export class FaqUpdateComponent {
  id!: String;
  faq :Faq = new Faq;

  constructor(private faqService : FaqService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void{
    this.id= this.route.snapshot.params['id'];
    this.faqService.getUserID(this.id).subscribe(data=>{
      console.log(data);
      this.faq = data;
      // console.log(this.faq.faq_id);
      // console.log(this.faq.faq_name);
    },error => console.log(error));
  
  }

  onUpdate(){
    if(confirm("Apakah Anda yakin ingin mengubah bantuan ini?")) {
      this.faqService.updateFaq(this.id , this.faq).subscribe(data =>
      {
        this.goToFaqList();
        this.toastr.success('Data bantuan berhasil diubah', 'Ubah');
      }, 
      error => console.log(error))
    }
  }

  goToFaqList(){
    this.router.navigate(['/faq'])
  }
}
