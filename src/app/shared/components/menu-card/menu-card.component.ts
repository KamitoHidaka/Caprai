import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-card',
  template: `
    <div class="card">
      <p class="title">{{title}}</p>
      <p class="description">{{description}}</p>
      <div class="sizes">
        <div>
          <p>Pequeña</p>
          <p>{{price_s}}</p>
        </div>
        <div>
          <p>Mediana</p>
          <p>{{price_m}}</p>
        </div>
        <div>
          <p>Grande</p>
          <p>{{price_l}}</p>
        </div>        
      </div>
    </div>
    
  `,
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent{
  @Input() title='';
  @Input() description='';
  @Input() price_s='';
  @Input() price_m='';
  @Input() price_l='';
}
