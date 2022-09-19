import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
    <div id="menu" class="menu-container">

      <!------ PIZZA ------>
      
      <p class="title">PIZZAS</p>
      <div class="cards-container">
        <app-menu-card
          class_card="card"
          title="CAPRAI"
          class_description="description"
          description="carne, pollo, tocineta, maiz, aceitunas, oregano"
          small="Pequeña"
          medium="Mediana"
          large="Grande"
          price_s="$12.000"
          price_m="$19.000"
          price_l="$28.000"
        ></app-menu-card>
        <app-menu-card
          class_card="card"
          title="MEXICANA"
          class_description="description"
          description="carne, frijolitos, tomate, maiz, cebolla, jalapeños"
          small="Pequeña"
          medium="Mediana"
          large="Grande"
          price_s="$12.000"
          price_m="$19.000"
          price_l="$28.000"
        ></app-menu-card>
        <app-menu-card
          class_card="card"
          title="TROPICAL"
          class_description="description"
          description="piña, jamonm, cervecero"
          small="Pequeña"
          medium="Mediana"
          large="Grande"
          price_s="$12.000"
          price_m="$16.000"
          price_l="$25.000"
        ></app-menu-card>
        <app-menu-card
          class_card="card"
          title="BARBACOA"
          class_description="description"
          description="carne, tocineta, tomate, salsa de la casa"
          small="Pequeña"
          medium="Mediana"
          large="Grande"
          price_s="$12.000"
          price_m="$19.000"
          price_l="$28.000"
        ></app-menu-card>
        <app-menu-card
          class_card="card"
          title="VEGETARIANA"
          class_description="description"
          description="chapiñones, platano, maiz, aceitunas, oregano"
          small="Pequeña"
          medium="Mediana"
          large="Grande"
          price_s="$12.000"
          price_m="$16.000"
          price_l="$25.000"
        ></app-menu-card>
      </div>
  
      <!------ HAMBURGUESAS ------>
      
      <p class="title">HAMBURGUESAS</p>
      <div class="cards-container cards-container-large hamburger">
        <app-menu-card
          class_card="card large_card"
          title="CAPRAIA"
          class_description="description"
          description="carne de res artesanal, patacon,tomate, cebolla, tocineta, queso, papas a la francesa y gaseosa personal"
          small="Precio"
          price_s="$14.000"
        ></app-menu-card>
        <app-menu-card
          class_card="card large_card"
          title="CAPRAIA"
          class_description="description"
          description="tortilla, pechuga a la plancha, tocineta, aguacate, tomate, cebolla, queso, y gaseosa personal"
          small="Precio"
          price_s="$13.000"
        ></app-menu-card>
      </div>

      <!------ BEBIDAS ------>

      <p class="title">BEBIDAS</p>
      <div class="cards-container bebidas">
        <app-menu-card
          class_card="card small_card"
          description="Gaseosa 1.5L"
          class_description="small_description"
          price_s="$4.800"
        ></app-menu-card>
        <app-menu-card
          class_card="card small_card"
          description="Gaseosa Personal"
          class_description="small_description"
          price_s="$2.500"
        ></app-menu-card>
        <app-menu-card
          class_card="card small_card" 
          description="Te" 
          class_description="small_description"
          price_s="$2.500"
        ></app-menu-card>
        <app-menu-card
          class_card="card small_card" 
          description="Aromatica" 
          class_description="small_description"
          price_s="$2.000"
        ></app-menu-card>
        <app-menu-card
          class_card="card small_card"
          description="Milo Caliente"
          class_description="small_description"
          price_s="$3.500"
        ></app-menu-card>
        <app-menu-card
          class_card="card small_card" 
          description="Capuccino"
          class_description="small_description" 
          price_s="$2.000"
        ></app-menu-card>
      </div>
    </div>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {}
