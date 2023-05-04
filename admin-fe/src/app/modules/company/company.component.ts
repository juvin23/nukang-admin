import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from './company';
import { CompanyService } from './company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})

export class companyComponent {
  public companyData = new MatTableDataSource<Company>();
  companys!: Company[];
  companyColumns: string[] = ['id' , 'name' , 'email' , 'address','city','province','merchant_categories','phone','action'];

  @ViewChild(MatSort, { static: true })sort!: MatSort;
  @ViewChild(MatPaginator) paginator :any = MatPaginator;


  constructor(private companyService: CompanyService,
    private router: Router){
  }

  ngOnInit(): void{ 
    this.getCompanys();
  }

  private getCompanys(){
    this.companyService.getCompanyList().subscribe(data =>{
    this.companyData.data = data;
    });
  }

  updateCompany(id: BigInt){
    this.router.navigate(['company/update-company',id]);
  }    

  deleteCompany(id: BigInt){
    if(confirm("Are you sure to delete this Company data ?")) {    
      this.companyService.deleteCompanys(id).subscribe(data =>
      {
        this.getCompanys();
      })
    }

  }

  ngAfterViewInit(){
    this.companyData.sort = this.sort;
    this.companyData.paginator = this.paginator;
  }

  applyFilter(event: any){
    const filterValue = (event.target as HTMLInputElement).value;
    this.companyData.filter = filterValue.trim().toLowerCase();
  }
}
