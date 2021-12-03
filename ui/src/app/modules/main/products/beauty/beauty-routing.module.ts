import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBeautyComponent } from './list-beauty/list-beauty.component';
import { PreviewBeautyComponent } from './preview-beauty/preview-beauty.component';

const routes: Routes = [
  {
    path: '',
    component:ListBeautyComponent,
  },
  {
    path: 'preview',
    component:PreviewBeautyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeautyRoutingModule { }
