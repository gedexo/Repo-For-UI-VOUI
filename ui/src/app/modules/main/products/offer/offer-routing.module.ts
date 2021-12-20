import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { PreviewOfferComponent } from './preview-offer/preview-offer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:ListOfferComponent,
  },
  {
    path: 'preview/:id',
    pathMatch: 'full',
    component:PreviewOfferComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
