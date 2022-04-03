import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { TableFunctionsComponent } from './table-functions/table-functions.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponentComponent,
    FormElementsComponent,
    TableFunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
