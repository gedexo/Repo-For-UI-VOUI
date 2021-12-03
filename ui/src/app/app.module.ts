import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NguCarouselModule } from '@ngu/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainService } from './modules/service/main.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NguCarouselModule, CarouselModule,SwiperModule, MatSidenavModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
