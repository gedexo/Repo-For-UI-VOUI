import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    DashboardComponent,
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule, MatIconModule, MatFormFieldModule, MatButtonModule,
    MatInputModule, ReactiveFormsModule, FormsModule, CarouselModule,
    SwiperModule, MatGridListModule

  ]
})
export class DashboardModule { }
