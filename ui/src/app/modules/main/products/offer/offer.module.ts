import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { PreviewOfferComponent } from './preview-offer/preview-offer.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainService } from 'app/modules/service/main.service';
import {MatDividerModule} from '@angular/material/divider';
import {CartModule } from '../../cart/cart.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ListOfferComponent,
    PreviewOfferComponent,


  ],
  imports: [
    CommonModule,CartModule,
    OfferRoutingModule, MatPaginatorModule, MatGridListModule, MatCheckboxModule, MatExpansionModule,
    MatSnackBarModule, MatCardModule,MatIconModule, MatButtonModule ,MatFormFieldModule,
    MatInputModule, MatButtonToggleModule, ReactiveFormsModule, FormsModule,MatToolbarModule,
     CarouselModule, MatTabsModule, MatSidenavModule, MatDividerModule,
     NgxSkeletonLoaderModule, MatSelectModule,
  ],
  exports:[],
  providers: [MainService],
})
export class OfferModule { }
