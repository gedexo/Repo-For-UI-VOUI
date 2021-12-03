import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListElectronicsComponent } from './list-electronics/list-electronics.component';
import { PreviewElectronicsComponent } from './preview-electronics/preview-electronics.component';

const routes: Routes = [
  {
    path: '',
    component:ListElectronicsComponent,
  },
  {
    path: 'preview',
    component:PreviewElectronicsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
