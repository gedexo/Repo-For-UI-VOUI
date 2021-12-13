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
import {MatBadgeModule} from '@angular/material/badge';
import { UserInfoComponent } from './common/user-info/user-info.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { HttpClientModule , HttpClient } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};








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
     FormsModule,MatGridListModule,MatSidenavModule, SwiperModule,
     HttpClientModule, MatBadgeModule, CarouselModule


  ],
  providers: [MainService,HttpClient,
    {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG,
    }
  ]
})
export class MainModule { }
