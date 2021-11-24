import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './common/header/header.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SwiperModule } from 'swiper/angular';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {FooterComponent } from './common/footer/footer.component'

import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from './inventory/dashboard/dashboard.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OfferSectionComponent } from './inventory/offer-section/offer-section.component';
import { BrandSectionComponent } from './inventory/brand-section/brand-section.component';
import { BeautySectionComponent } from './inventory/beauty-section/beauty-section.component';
import { FashionSectionComponent } from './inventory/fashion-section/fashion-section.component';
import { SportSectionComponent } from './inventory/sport-section/sport-section.component';
import { ElectronicsSectionComponent } from './inventory/electronics-section/electronics-section.component';
import { HouseholdSectionComponent } from './inventory/household-section/household-section.component';
import { PetsupplySectionComponent } from './inventory/petsupply-section/petsupply-section.component';
import { AutomotoSectionComponent } from './inventory/automoto-section/automoto-section.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';






@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    OfferSectionComponent,
    BrandSectionComponent,
    BeautySectionComponent,
    FashionSectionComponent,
    SportSectionComponent,
    ElectronicsSectionComponent,
    HouseholdSectionComponent,
    PetsupplySectionComponent,
    AutomotoSectionComponent,




  ],
  imports: [
    CommonModule,
    MainRoutingModule, MatSidenavModule, MatToolbarModule ,MatMenuModule,
    MatDividerModule, MatListModule ,MatIconModule, MatButtonModule ,MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonToggleModule, ReactiveFormsModule, FormsModule,
    SwiperModule,MatGridListModule, MatTreeModule, MatCardModule, CarouselModule, MatCheckboxModule,
    MatExpansionModule
 

  ]
})
export class MainModule { }
