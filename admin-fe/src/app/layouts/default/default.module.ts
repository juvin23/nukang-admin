import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from 'src/app/modules/user/user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { companyComponent } from 'src/app/modules/company/company.component';
import {MatButtonModule} from '@angular/material/button';
import { AdsComponent } from 'src/app/modules/ads/ads.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from 'src/app/modules/login-page/login-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { CityComponent } from 'src/app/modules/city/city.component';
import { MerchantCategoryComponent } from 'src/app/modules/merchant-category/merchant-category.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CityCreateComponent } from 'src/app/modules/city/city-create/city-create.component';
import { CityUpdateComponent } from 'src/app/modules/city/city-update/city-update.component';
import { ProvinceComponent } from 'src/app/modules/province/province.component';
import { ProvinceCreateComponent } from 'src/app/modules/province/province-create/province-create.component';
import { ProvinceUpdateComponent } from 'src/app/modules/province/province-update/province-update.component';
import { FaqComponent } from 'src/app/modules/faq/faq.component';
import { FaqCreateComponent } from 'src/app/modules/faq/faq-create/faq-create.component';
import { FaqUpdateComponent } from 'src/app/modules/faq/faq-update/faq-update.component';
import { CompanyUpdateComponent } from 'src/app/modules/company/company-update/company-update.component';
import { CompanyCreateComponent } from 'src/app/modules/company/company-create/company-create.component';
import { MerchantUpdateComponent } from 'src/app/modules/merchant-category/merchant-update/merchant-update.component';
import { MerchantComponent } from 'src/app/modules/merchant/merchant.component';
import { TransactionComponent } from 'src/app/modules/transaction/transaction.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UserComponent,
    companyComponent,
    AdsComponent,
    LoginPageComponent,
    TransactionComponent,
    CityComponent,
    MerchantComponent,
    MerchantCategoryComponent,
    CityCreateComponent,
    CityUpdateComponent,
    ProvinceComponent,
    ProvinceCreateComponent,
    ProvinceUpdateComponent,
    FaqComponent,
    FaqCreateComponent,
    FaqUpdateComponent,
    CompanyUpdateComponent,
    CompanyCreateComponent,
    MerchantUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
