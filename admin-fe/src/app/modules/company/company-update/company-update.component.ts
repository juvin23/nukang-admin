import { Component } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss']
})
export class CompanyUpdateComponent {
  id!: BigInt;
  company :Company = new Company;
  constructor(private companyService : CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void{

    this.id= this.route.snapshot.params['id'];
    
    this.companyService.getCompanyId(this.id).subscribe(data=>{
      console.log(data);
      this.company = data;
    },error => console.log(error));
  
  }

  onUpdate(){
    this.companyService.updateCompany(this.id , this.company).subscribe(data =>{
      this.goToCompanyList();
    }, error => console.log(error))
  }

  goToCompanyList(){
    this.router.navigate(['/company'])
  }
}
