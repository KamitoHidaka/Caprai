import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
      <div id="menu" class="menu-container">
        <p class="title">PIZZAS</p>
        <div class="cards-container">
          <app-menu-card
            title="CAPRAI"
            description="carne, pollo, tocineta, maiz, aceitunas, oregano"
            small="Pequeña"
            medium="Mediana"
            large="Grande"
            price_s="$12.000"
            price_m="$19.000"
            price_l="$28.000"
          ></app-menu-card>
          <app-menu-card
            title="MEXICANA"
            description="carne, frijolitos, tomate, maiz, cebolla, jalapeños"
            small="Pequeña"
            medium="Mediana"
            large="Grande"
            price_s="$12.000"
            price_m="$19.000"
            price_l="$28.000"
          ></app-menu-card>
          <app-menu-card
            title="TROPICAL"
            description="piña, jamonm, cervecero"
            small="Pequeña"
            medium="Mediana"
            large="Grande"
            price_s="$12.000"
            price_m="$16.000"
            price_l="$25.000"
          ></app-menu-card>
          <app-menu-card
            title="BARBACOA"
            description="carne, tocineta, tomate, salsa de la casa"
            small="Pequeña"
            medium="Mediana"
            large="Grande"
            price_s="$12.000"
            price_m="$19.000"
            price_l="$28.000"
          ></app-menu-card>
          <app-menu-card
            title="VEGETARIANA"
            description="chapiñones, platano, maiz, aceitunas, oregano"
            small="Pequeña"
            medium="Mediana"
            large="Grande"
            price_s="$12.000"
            price_m="$16.000"
            price_l="$25.000"
          ></app-menu-card>
        </div>
        <p class="title">HAMBURGUESAS</p>
        <div class="cards-container hamburger">
          <app-menu-card
            title="CAPRAIA"
            description="carne de res artesanal, patacon,tomate, cebolla, tocineta, queso, papas a la francesa y gaseosa personal"
            small="Precio"
            price_s="$14.000"
          ></app-menu-card>
          <app-menu-card
            title="CAPRAIA"
            description="tortilla, pechuga a la plancha, tocineta, aguacate, tomate, cebolla, queso, y gaseosa personal"
            small="Precio"
            price_s="$13.000"
          ></app-menu-card>
        </div>
      </div>
  `,
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {}
