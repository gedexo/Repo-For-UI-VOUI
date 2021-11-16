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
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule, MatSidenavModule, MatToolbarModule ,MatMenuModule,
    MatDividerModule, MatListModule ,MatIconModule, MatButtonModule ,MatFormFieldModule,
    MatInputModule, MatSelectModule

  ]
})
export class MainModule { }
