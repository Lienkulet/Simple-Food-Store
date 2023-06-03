import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  category: any 

  constructor() { }

  ngOnInit(): void {
    this.category = JSON.parse(localStorage.getItem('category') || '');
     console.log(this.category);
  }

  exportSubCategory(x: any){
    localStorage.setItem('subcategory', JSON.stringify(x));
 }

}
