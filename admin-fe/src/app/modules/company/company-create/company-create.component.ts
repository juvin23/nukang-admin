import { Component } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {
  company: Company = new Company;
  constructor(private companyService: CompanyService,
              private router: Router){}
  
  saveCompany(){
    this.companyService.createCompany(this.company).subscribe(data =>
      {
        console.log(data);
        this.goToUserList();
      },
      error => console.log(error))
  }
  
  goToUserList(){
    this.router.navigate(['/company'])
  }
  
  onSubmit() {
    this.saveCompany();
    this.goToUserList();
  }
      
  ngOnInit(): void {
  }
}
