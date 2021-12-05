import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  declarations: [
    SettingsComponent,
    MyAccountComponent,
    WishlistComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule, MatIconModule, MatButtonModule, MatFormFieldModule,
    MatInputModule, ReactiveFormsModule, FormsModule, MatTableModule, MatCardModule,
    MatToolbarModule, MatPaginatorModule, MatSnackBarModule, FlexLayoutModule

  ]
})
export class SettingsModule { }
