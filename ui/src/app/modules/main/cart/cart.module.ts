import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainService } from 'app/modules/service/main.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule, MatDividerModule,MatButtonModule, MatIconModule, MatInputModule,
    MatSidenavModule,MatFormFieldModule, FormsModule, MatToolbarModule
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }
