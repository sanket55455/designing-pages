import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotationComponent } from './quotation/quotation.component';
import { CreateQuotationComponent } from './create-quotation/create-quotation.component';


const routes: Routes = [
  {path : '', component:QuotationComponent},
  {path : 'create', component:CreateQuotationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
