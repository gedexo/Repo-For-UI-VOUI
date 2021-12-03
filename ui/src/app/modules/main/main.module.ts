import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './common/header/header.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {FooterComponent } from './common/footer/footer.component'
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MainService } from '../service/main.service';
import {CartModule } from '../main/cart/cart.module';

import { UserInfoComponent } from './common/user-info/user-info.component';






@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserInfoComponent,


  ],
  imports: [
    CommonModule,CartModule,
    MainRoutingModule, MatToolbarModule ,
    MatDividerModule ,MatIconModule, MatButtonModule ,MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonToggleModule, ReactiveFormsModule,
     FormsModule,MatGridListModule, CarouselModule,MatSidenavModule


  ],
  providers: [MainService],
})
export class MainModule { }
