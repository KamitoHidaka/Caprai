import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <div id="about" class="about-container">
      <div class="us">
        <h2>CAPRAI ES</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quam
          esse modi quis excepturi sunt, similique delectus voluptas quasi ab
          ipsa dicta mollitia nisi velit sequi perferendis iste nemo
          exercitationem?
        </p>
      </div>
      <div class="info">
        <p class="title-section">Direccion:</p>
        <p class="text">Calle 40 #20-76 etapa 5</p>
        <p class="title-section">Local:</p>
        <p class="text">Lunes - Jueves: 3:30pm - 8:00pm</p>
        <p class="title-section">Domicilios:</p>
        <p class="text">Lunes - Domingo: 3:30pm - 10:00pm</p>
        <p class="title-section">Telefono</p>
        <p class="text">3128974343</p>
      </div>
    </div>
  `,
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {}
