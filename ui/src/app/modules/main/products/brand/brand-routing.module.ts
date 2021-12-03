import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBrandComponent } from './list-brand/list-brand.component';
import { PreviewBrandComponent } from './preview-brand/preview-brand.component';

const routes: Routes = [
  {
    path: '',
    component:ListBrandComponent,
  },
  {
    path: 'preview',
    component:PreviewBrandComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
