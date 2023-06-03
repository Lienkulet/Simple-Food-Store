import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayAllComponent } from './display-all/display-all.component'
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { PreHomeComponent } from './pre-home/pre-home.component';

const routes: Routes = [
  {
    path: "displayAll", component: DisplayAllComponent
  },
  {
    path: "product/:id", component: ProductComponent
  },
  {
    path: "products/:id", component: ProductsComponent
  },
  {
    path: "main/:id", component: MainComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "", redirectTo: "displayAll", pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
