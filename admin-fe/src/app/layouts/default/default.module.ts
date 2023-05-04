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
import { CityUpdateComponent } from 'src/app/modules/city/city-update/city-update.component';
import { CompanyUpdateComponent } from 'src/app/modules/company/company-update/company-update.component';
import { CompanyCreateComponent } from 'src/app/modules/company/company-create/company-create.component';
import { MerchantUpdateComponent } from 'src/app/modules/merchant-category/merchant-update/merchant-update.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UserComponent,
    companyComponent,
    AdsComponent,
    LoginPageComponent,
    CityComponent,
    MerchantCategoryComponent,
    CityUpdateComponent,
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
