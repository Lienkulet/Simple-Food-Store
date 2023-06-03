import { Component, OnInit } from '@angular/core';
import { myCart } from '../produse';
import { categories } from '../categories';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myCartt: any[] = [];
  cart: any[] = []
  mycartt: any[] = []
  sum: number = 0.0
  k: boolean = true;
  c: boolean = true;
  z: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.refresh();

    
  }

  refresh() {
    if (localStorage.getItem("myCart")) {
      this.myCartt = JSON.parse(localStorage.getItem("myCart") || '');
      console.log(this.myCartt);
    }
    else {
      console.log('empty');
    }
    this.calculateSum();
  }

  calculateSum() {
    this.sum = 0;
    for (let i = 0; i < this.myCartt.length; i++) {
      for (let j = 0; j < this.myCartt[i].products.length; j++) {
        this.sum += this.myCartt[i].products[j].price;
      }
    }
  }

  minus(x: number) {
    for (let i = 0; i < this.myCartt.length; i++) {
      for (let j = 0; j < this.myCartt[i].products.length; j++) {

        if (this.myCartt[i].products[j].product_id == x) {
          if (this.myCartt[i].products[j].quantity > 1) {
            this.myCartt[i].products[j].quantity -= 1;
            this.myCartt[i].products[j].price -= this.myCartt[i].products[j].price1;
          }
        }
      }
    }

    localStorage.setItem("myCart", JSON.stringify(this.myCartt));
    this.refresh();
  }

  plus(x: number) {
    for (let i = 0; i < this.myCartt.length; i++) {
      for (let j = 0; j < this.myCartt[i].products.length; j++) {
        if (this.myCartt[i].products[j].product_id == x) {
          this.myCartt[i].products[j].quantity += 1;
          this.myCartt[i].products[j].price += this.myCartt[i].products[j].price1;
        }
      }
    }
    localStorage.setItem("myCart", JSON.stringify(this.myCartt));
    this.refresh();
  }

  setProdus(x: number) {
    localStorage.setItem('product', JSON.stringify(x));
  }

  setLocalCart(x:any){
    localStorage.setItem("myCart", JSON.stringify(x));
    this.refresh();
  }

  delete(x: number) {
      console.log(this.myCartt.map(cart => {
        cart.products = cart.products.filter((cartProduct:any) => cartProduct.product_id != x);
        if(cart.products.length>0){
          this.mycartt = this.myCartt.filter(carT => carT.category_id == cart.category_id);
        }
    }));

    console.log(this.mycartt);

    this.setLocalCart(this.mycartt);
  }
}
