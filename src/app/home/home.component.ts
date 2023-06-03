import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  categoriess: any[] = categories
  type: number = 1
  categoryy: any 

  constructor() { }
  
  ngOnInit(): void {
  }

  dispalyMenu(){
    if( this.type == 0){
      this.type = 1;
    } else {
      this.type = 0;
    }
  }


  exportCategory(x: any){
     localStorage.setItem('category', JSON.stringify(x));
     this.dispalyMenu();
  }
}

