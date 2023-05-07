import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AdsComponent } from './modules/ads/ads.component';
import { CityCreateComponent } from './modules/city/city-create/city-create.component';
import { CityUpdateComponent } from './modules/city/city-update/city-update.component';
import { CityComponent } from './modules/city/city.component';
import { CompanyCreateComponent } from './modules/company/company-create/company-create.component';
import { CompanyUpdateComponent } from './modules/company/company-update/company-update.component';
import { companyComponent } from './modules/company/company.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FaqComponent } from './modules/faq/faq.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';
import { MerchantCategoryComponent } from './modules/merchant-category/merchant-category.component';
import { MerchantUpdateComponent } from './modules/merchant-category/merchant-update/merchant-update.component';
import { ProvinceCreateComponent } from './modules/province/province-create/province-create.component';
import { ProvinceUpdateComponent } from './modules/province/province-update/province-update.component';
import { ProvinceComponent } from './modules/province/province.component';
import { UserUpdateComponent } from './modules/user/user-update/user-update.component';
import { UserComponent } from './modules/user/user.component';
import { FaqCreateComponent } from './modules/faq/faq-create/faq-create.component';
import { FaqUpdateComponent } from './modules/faq/faq-update/faq-update.component';
import { MerchantComponent } from './modules/merchant/merchant.component';
import { TransactionComponent } from './modules/transaction/transaction.component';


const routes: Routes = [{
  path:'',
  component: DefaultComponent,
  children:[
    // {path:'', component: DashboardComponent},    
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: LoginPageComponent},
    {path:'transaction',component: TransactionComponent},    
    {path:'user',component: UserComponent},
    {path:'user/update-user/:id',component: UserUpdateComponent},
    {path:'company',component: companyComponent},
    {path:'company/create-company',component: CompanyCreateComponent},
    {path:'company/update-company/:id',component: CompanyUpdateComponent},
    {path:'ads',component:AdsComponent},
    {path:'merchant',component:MerchantComponent},
    // {path:'merchant-category',component:MerchantCategoryComponent},
    // {path:'merchant-category/merchant-update/:id',component:MerchantUpdateComponent},
    {path:'province',component:ProvinceComponent},
    {path:'province/province-create',component:ProvinceCreateComponent},
    {path:'province/province-update/:id',component:ProvinceUpdateComponent},
    {path:'city',component:CityComponent},
    {path:'city/city-create',component:CityCreateComponent},
    {path:'city/city-update/:id',component:CityUpdateComponent},
    {path:'faq',component:FaqComponent},
    {path:'faq/faq-create',component:FaqCreateComponent},
    {path:'faq/faq-update/:id',component:FaqUpdateComponent}
  ]
}];

// const loginP: Routes = [{
//   path:'login',
//   component: LoginPageComponent}];

@NgModule({
  // imports: [RouterModule.forRoot(routes),RouterModule.forRoot(loginP)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
