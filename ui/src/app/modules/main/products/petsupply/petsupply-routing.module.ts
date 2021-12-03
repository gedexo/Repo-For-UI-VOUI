import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPetsupplyComponent } from './list-petsupply/list-petsupply.component';
import { PreviewPetsupplyComponent } from './preview-petsupply/preview-petsupply.component';

const routes: Routes = [
  {
    path: '',
    component:ListPetsupplyComponent,
  },
  {
    path: 'preview',
    component:PreviewPetsupplyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsupplyRoutingModule { }
