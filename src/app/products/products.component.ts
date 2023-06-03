import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  subcategory: any
  products: any[] = []
  cart: any[] = []
  myCartt: any[] = [];
  default: boolean = true;
  high: boolean = false;
  low: boolean = false;
  k: boolean = true;
  y: boolean = true;
  z: boolean = true;
  temp2: any
  constructor() { }

  ngOnInit(): void {
    this.subcategory = JSON.parse(localStorage.getItem('subcategory') || '');
    this.sortDefault();
    
    if (localStorage.getItem("myCart")) {
      this.myCartt = JSON.parse(localStorage.getItem("myCart") || '');
      console.log(this.myCartt);
    }
    
    console.log(this.subcategory);
    console.log(this.products);
  }

  setProdus(x: any) {
    localStorage.setItem('product', JSON.stringify(x));
  }

  sortHighToLow(){
  this.products = this.products.sort((a,b) => parseFloat(b.price)-parseFloat(a.price));
  this.default = false;
  this.high = true;
  this.low = false;
  }

  sortLowToHigh(){
    this.products = this.products.sort((a,b) => parseFloat(a.price)-parseFloat(b.price));
    this.default = false;
    this.high = false;
    this.low = true;
  }

  sortDefault(){
    this.products = this.subcategory.products;
    this.default = true;
    this.high = false;
    this.low = false;
  }

  addToCart(x: number) {
    let temp = {
      category_id: 0,
      category: '',
      products: this.cart
    }

    let temp1 = {
      product_id: 0,
      image: '',
      product: '',
      price: 0,
      price1: 0,
      masa_netto: '',
      quantity: 1
    }

    for (let i = 0; i < categories.length; i++) {
      for (let j = 0; j < categories[i].items.length; j++) {
        for (let k = 0; k < categories[i].items[j].products.length; k++) {
          if ((categories[i].items[j].products[k].id == x)
            &&
            (categories[i].items[j].subcategory_id == this.subcategory.subcategory_id)
          ) {

            temp1.product_id = x;
            temp1.image = categories[i].items[j].products[k].image;
            temp.category_id = categories[i].category_id;
            temp.category = categories[i].categoryName;
            temp1.product = categories[i].items[j].products[k].name;
            temp1.price = categories[i].items[j].products[k].price;
            temp1.price1 = categories[i].items[j].products[k].price;
            temp1.masa_netto = categories[i].items[j].products[k].Masa_netto;

            this.cart.push(temp1);
            temp.products = this.cart;
            console.log('Cart: ' + this.cart);
            this.cart = [];
            // temp.product_id = x;
            // temp.category_id = categories[i].category_id;;
            // temp.category = categories[i].categoryName;
            // temp.product = categories[i].items[j].products[k].name;
            // temp.price = categories[i].items[j].products[k].price;
            // temp.price1 = categories[i].items[j].products[k].price;
            // temp.masa_netto = categories[i].items[j].products[k].Masa_netto;
          }
        }
      }
    }


console.log(temp1.product_id);
    this.k = true;
    this.y = true;
    for (let i = 0; i < this.myCartt.length; i++) {

      if (this.myCartt[i].category_id == temp.category_id) {
        this.y = false;
        for (let k = 0; k < this.myCartt[i].products.length; k++) {
            if (this.myCartt[i].products[k].product_id == temp1.product_id) {
              this.myCartt[i].products[k].quantity++;
              this.myCartt[i].products[k].price = this.myCartt[i].products[k].quantity * this.myCartt[i].products[k].price1;
              this.k = false;
              console.log('tyasssds');
              this.z = false;
            }
          }

        if (this.z) {
          console.log('xxx');
          this.myCartt[i].products.push(temp1);
        }
      }
    }

    if (this.y) {
      this.myCartt.push(temp);
    }

    localStorage.setItem("myCart", JSON.stringify(this.myCartt));
    console.log(this.myCartt);
  }
}

