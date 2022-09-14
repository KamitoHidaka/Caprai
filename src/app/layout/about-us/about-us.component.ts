import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <div class="about-container">
      <div class="us">
          <h2>Somos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quam esse modi quis excepturi sunt, similique delectus voluptas quasi ab ipsa dicta mollitia nisi velit sequi perferendis iste nemo exercitationem?</p>
      </div>
      <div class="info">
        <section>
          <p>Direccion: </p>
          <p>calle 40 #20-76  etapa 5</p>
        </section>
        <section>
          <p>Telefono</p>
          <p>3128974343</p>
        </section>
        <section>
            <p>Horario</p>
            <p>Lunes: 5:00pm - 11:00pm</p>
            <p>Martes: 5:00pm - 11:00pm</p>
            <p>Miercoles: 5:00pm - 11:00pm</p>
            <p>Jueves: 5:00pm - 11:00pm</p>
            <p>Viernes: 5:00pm - 11:00pm</p>
            <p>Sabado: 5:00pm - 11:00pm</p>
            <p>Domingo: 5:00pm - 11:00pm</p>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
