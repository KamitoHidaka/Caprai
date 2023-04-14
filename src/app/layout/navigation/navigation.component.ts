import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <div class="background">
      <!-- Menu Nuevo -->
      <!-- <div class="navigation-container">
        <a href="#home"><img src="assets/Logo-Original.png" alt="Caprai Logo" /></a>
        <div class="menu">
          <app-button
            href="#home"
            class="menu-button"
            text="INICIO"
          ></app-button>
          <app-button
            href="#about"
            class="menu-button smooth-scroll"
            text="SOBRE NOSOTROS"
          ></app-button>
          <app-button href="#menu" class="menu-button" text="MENU"></app-button>
          <app-button
            href="https://wa.link/8mh2in"
            target="_blank"
            class="menu-button"
            text="HAZ TU PEDIDO"
          ></app-button>
        </div>
      </div> -->
      
      <!-- Menu Antiguo -->
      <div class="navigation-container">
        <app-button href="#home" class="menu-button" text="INICIO"></app-button>
        <app-button
          href="#about"
          class="menu-button"
          text="SOBRE NOSOTROS"
        ></app-button>
        <a href="#home"
          ><img src="assets/Logo-Original.png" alt="Caprai Logo"
        /></a>
        <app-button href="#menu" class="menu-button" text="MENU"></app-button>
        <app-button
          href="https://wa.link/8mh2in"
          target="_blank"
          class="menu-button"
          text="WHATSAPP"
        ></app-button>
        <app-button
          href="tel:+865"
          class="menu-button"
          target="_black"
          text="3104049644"
        ></app-button>
      </div>

      <div class="phrase">
        <h1>Una experiencia y sabor únicos</h1>
        <p>Hecho con Amor</p>
      </div>
    </div>
  `,
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {}
