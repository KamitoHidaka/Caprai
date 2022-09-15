import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: ` 
  <div class="background">
    <div class="content">
      <app-button (click)="toHome()"class="menu-button" text="INICIO"></app-button>
      <app-button (click)="toAbout()" class="menu-button" text="SOBRE NOSOTROS"></app-button>
      <img src="assets/Logo.jpg" alt="Caprai Logo" height="100" />
      <app-button  class="menu-button" text="HAZ TU PEDIDO"></app-button>
      <app-button  class="menu-button" text="MENU"></app-button>
    </div>  
    <div class="phrase">
      <h1>Una Experiencia y <br> Sabor Unico</h1>
      <p>Hecho con Amor</p>
    </div>
  </div>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent{
  toHome(){
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth"});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"});

  }
 
    
}
