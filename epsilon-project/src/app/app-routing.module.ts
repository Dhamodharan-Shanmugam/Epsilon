import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { TableFunctionsComponent } from './table-functions/table-functions.component';

const routes: Routes = [
  { path: "card-component", component: CartComponentComponent },
  { path: "form-elements", component: FormElementsComponent },
  { path: "table-functions", component: TableFunctionsComponent },
  { path: '', redirectTo: '/card-component', pathMatch: 'full' },
  { path: '**', redirectTo: '/card-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
