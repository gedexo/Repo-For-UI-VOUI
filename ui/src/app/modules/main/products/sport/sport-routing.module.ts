import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSportComponent } from './list-sport/list-sport.component';
import { PreviewSportComponent } from './preview-sport/preview-sport.component';

const routes: Routes = [
  {
    path: '',
    component:ListSportComponent,
  },
  {
    path: 'preview',
    component:PreviewSportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
