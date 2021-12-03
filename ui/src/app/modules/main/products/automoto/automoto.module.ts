import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomotoRoutingModule } from './automoto-routing.module';
import { ListAutomotoComponent } from './list-automoto/list-automoto.component';
import { PreviewAutomotoComponent } from './preview-automoto/preview-automoto.component';


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

@NgModule({
  declarations: [
    ListAutomotoComponent,
    PreviewAutomotoComponent
  ],
  imports: [
    CommonModule,
    AutomotoRoutingModule, MatPaginatorModule, MatGridListModule, MatCheckboxModule, MatExpansionModule,
    MatSnackBarModule, MatCardModule,MatIconModule, MatButtonModule ,MatFormFieldModule,
    MatInputModule, MatButtonToggleModule, ReactiveFormsModule, FormsModule,MatToolbarModule,
    CarouselModule, MatTabsModule
  ]
})
export class AutomotoModule { }
