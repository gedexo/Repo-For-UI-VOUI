import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';

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







@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,



  ],
  imports: [
    CommonModule,
    MainRoutingModule, MatSidenavModule, MatToolbarModule ,MatMenuModule,
    MatDividerModule, MatListModule ,MatIconModule, MatButtonModule ,MatFormFieldModule,
    MatInputModule, MatSelectModule, MatButtonToggleModule, ReactiveFormsModule, FormsModule,
    SwiperModule,MatGridListModule, MatTreeModule
 

  ]
})
export class MainModule { }
