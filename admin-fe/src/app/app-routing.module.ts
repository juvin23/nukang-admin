import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { companyComponent } from './modules/company/company.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { UserComponent } from './modules/user/user.component';
import { UserUpdateComponent } from './modules/user/user-update/user-update.component';
import { CompanyCreateComponent } from './modules/company/company-create/company-create.component';
import { CompanyUpdateComponent } from './modules/company/company-update/company-update.component';
import { AdsComponent } from './modules/ads/ads.component';
import { MerchantCategoryComponent } from './modules/merchant-category/merchant-category.component';
import { CityComponent } from './modules/city/city.component';
import { CityUpdateComponent } from './modules/city/city-update/city-update.component';
import { MerchantUpdateComponent } from './modules/merchant-category/merchant-update/merchant-update.component';


const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[
    {path:'',component: DashboardComponent},    
    {path:'user',component: UserComponent},
    {path:'user/update-user/:id',component: UserUpdateComponent},
    {path:'company',component: companyComponent},
    {path:'company/create-company',component: CompanyCreateComponent},
    {path:'company/update-company/:id',component: CompanyUpdateComponent},
    {path:'ads',component:AdsComponent},
    {path:'merchant',component:MerchantCategoryComponent},
    {path:'merchant/merchant-update/:id',component:MerchantUpdateComponent},
    {path:'city',component:CityComponent},
    {path:'city/city-update/:id',component:CityUpdateComponent}
  ]
}];

const loginP: Routes = [{
  path:'login',
  component: LoginPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(loginP)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
