import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFashionComponent } from './list-fashion/list-fashion.component';
import { PreviewFashionComponent } from './preview-fashion/preview-fashion.component';

const routes: Routes = [
  {
    path: '',
    component:ListFashionComponent,
  },
  {
    path: 'preview',
    component:PreviewFashionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionRoutingModule { }
