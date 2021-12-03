import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAutomotoComponent } from './list-automoto/list-automoto.component';
import { PreviewAutomotoComponent } from './preview-automoto/preview-automoto.component';

const routes: Routes = [
  {
    path: '',
    component:ListAutomotoComponent,
  },
  {
    path: 'preview',
    component:PreviewAutomotoComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomotoRoutingModule { }
