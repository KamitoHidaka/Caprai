import { Component } from '@angular/core';
import {faCircleArrowUp} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-navigation',
  template: ` 
  <div class="background">
    <div class="content">
      <app-button href="#home" class="menu-button" text="INICIO"></app-button>
      <app-button href="#about" class="menu-button smooth-scroll" text="SOBRE NOSOTROS"></app-button>
      <a href="#home"><img src="assets/Logo.jpg" alt="Caprai Logo" height="100" /></a>
      <app-button href="#chat" class="menu-button" text="HAZ TU PEDIDO"></app-button>
      <app-button href="#menu" class="menu-button" text="MENU"></app-button>
      <fa-icon (click)="toHome()" class="arrow_up" [icon]="faCircleArrowUp"></fa-icon>
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
  faCircleArrowUp=faCircleArrowUp;

  toHome(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
 
    
}
