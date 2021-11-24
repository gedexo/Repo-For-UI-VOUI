import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AutomotoSectionComponent } from './inventory/automoto-section/automoto-section.component';
import { BeautySectionComponent } from './inventory/beauty-section/beauty-section.component';
import { BrandSectionComponent } from './inventory/brand-section/brand-section.component';
import { DashboardComponent } from './inventory/dashboard/dashboard.component';
import { ElectronicsSectionComponent } from './inventory/electronics-section/electronics-section.component';
import { FashionSectionComponent } from './inventory/fashion-section/fashion-section.component';
import { HouseholdSectionComponent } from './inventory/household-section/household-section.component';
import { OfferSectionComponent } from './inventory/offer-section/offer-section.component';
import { PetsupplySectionComponent } from './inventory/petsupply-section/petsupply-section.component';
import { SportSectionComponent } from './inventory/sport-section/sport-section.component';


import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
       component: DashboardComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'login',
       component: LoginComponent,
      },
      {
        path: 'signup',
       component: SignupComponent,
      },
      {
        path: 'offer',
       component: OfferSectionComponent,
      },
      {
        path: 'brand',
       component: BrandSectionComponent,
      },
      {
        path: 'beauty',
       component: BeautySectionComponent,
      },
      {
        path: 'fashion',
       component: FashionSectionComponent,
      },
      {
        path: 'sport',
       component: SportSectionComponent,
      },
      {
        path: 'electronics',
       component: ElectronicsSectionComponent,
      },
      {
        path: 'houshold',
       component: HouseholdSectionComponent,
      },
      {
        path: 'petsupply',
       component: PetsupplySectionComponent,
      },
      {
        path: 'automoto',
       component: AutomotoSectionComponent,
      },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
