import { Component } from '@angular/core';
import menuData from './menu.json';

interface MenuItem {
  name: string;
  description: string;
  image: string;
  price: string;
}

@Component({
  selector: 'app-menu',
  template:`
   <div class="menu" id="menu">
     <div class="menu-category" *ngFor="let category of menuItems">
       <h2 class="category-title">{{ category.category }}</h2>
       <ul class="cards-container">
         <li *ngFor="let item of category.items" class="card">
           <img src="{{ item.image }}" alt="{{ item.name }}">
           <h3 class="title">{{ item.name }}</h3>
           <p class="description">{{ item.description }}</p>
           <p class="price">{{item.price}}</p>
          </li>
        </ul>
      </div>
    </div> 
  `,
  styleUrls: ['./menu.component.scss']
})
  
  export class MenuComponent {
    menuItems: { category: string, items: MenuItem[] }[] = [];
  
    constructor() {
      for (const [category, items] of Object.entries(menuData)) {
        this.menuItems.push({ category, items });
      }
    }
  }