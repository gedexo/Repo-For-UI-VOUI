import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { UserInfoComponent } from './common/user-info/user-info.component';

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
        loadChildren: () => import('./products/offer/offer.module').then((mod)=>mod.OfferModule)
      },
      {
        path: 'brand',
        loadChildren: () => import('./products/brand/brand.module').then((mod)=>mod.BrandModule)
      },
      {
        path: 'beauty',
        loadChildren: () => import('./products/beauty/beauty.module').then((mod)=>mod.BeautyModule)
      },
      {
        path: 'fashion',
        loadChildren: () => import('./products/fashion/fashion.module').then((mod)=>mod.FashionModule)
      },
      {
        path: 'sport',
        loadChildren: () => import('./products/sport/sport.module').then((mod)=>mod.SportModule)
      },
      {
        path: 'electronics',
        loadChildren: () => import('./products/electronics/electronics.module').then((mod)=>mod.ElectronicsModule)
      },
      {
        path: 'household',
        loadChildren: () => import('./products/household/household.module').then((mod)=>mod.HouseholdModule)
      },
      {
        path: 'petsupply',
        loadChildren: () => import('./products/offer/offer.module').then((mod)=>mod.OfferModule)
      },
      {
        path: 'automoto',
        loadChildren: () => import('./products/automoto/automoto.module').then((mod)=>mod.AutomotoModule)
      },
      {
        path: 'userinfo',
       component: UserInfoComponent,
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then((mod)=>mod.SettingsModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
