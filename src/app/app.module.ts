import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { DisplayAllComponent } from './display-all/display-all.component';
import { CartComponent } from './cart/cart.component';
import { PreHomeComponent } from './pre-home/pre-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    MainComponent,
    ProductsComponent,
    DisplayAllComponent,
    CartComponent,
    PreHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
