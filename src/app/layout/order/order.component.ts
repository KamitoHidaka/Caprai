import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <div class="order-container">
      <p>PIZZAS</p>
      <div class="cards-container">
        <app-menu-card
          title="CAPRAI"
          description="carne, pollo, tocineta, maiz, aceitunas, oregano"
          price_s="$12.000"
          price_m="$19.000"
          price_l="$28.000"
        ></app-menu-card>
        <app-menu-card
          title="MEXICANA"
          description="carne, frijolitos, tomate, maiz, cebolla, jalapeños"
          price_s="$12.000"
          price_m="$19.000"
          price_l="$28.000"
        ></app-menu-card>
        <app-menu-card
          title="TROPICAL"
          description="piña, jamonm, cervecero"
          price_s="$12.000"
          price_m="$16.000"
          price_l="$25.000"
        ></app-menu-card>
        <app-menu-card
          title="BARBACOA"
          description="carne, tocineta, tomate, salsa de la casa"
          price_s="$12.000"
          price_m="$19.000"
          price_l="$28.000"
        ></app-menu-card>
        <app-menu-card
          title="VEGETARIANA"
          description="chapiñones, platano, maiz, aceitunas, oregano"
          price_s="$12.000"
          price_m="$16.000"
          price_l="$25.000"
        ></app-menu-card>
      </div>
      <p>Hamburguesas</p>
      <div class="cards-container">}
        <app-menu-card
         title="CAPRAIA"
         description="carne de res artesanal, patacon,tomate, cebolla, tocineta, queso, papas a la francesa y gaseosa personal"
         price_s="$14.000" 
        ></app-menu-card>
        <app-menu-card
         title="CAPRAIA"
         description="tortilla, pechuga a la plancha, tocineta, aguacate, tomate, cebolla, queso, y gaseosa personal"
         price_s="$13.000" 
        ></app-menu-card>
      </div>
      <div class="order">
        <p>oderna ahora</p>
      </div>
    </div>
  `,
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {}
