import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHouseholdComponent } from './list-household/list-household.component';
import { PreviewHouseholdComponent } from './preview-household/preview-household.component';

const routes: Routes = [
  {
    path: '',
    component:ListHouseholdComponent,
  },
  {
    path: 'preview',
    component:PreviewHouseholdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseholdRoutingModule { }
