import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-card',
  template: `
    <div class={{class_card}}>
      <p class="title">{{title}}</p>
      <p class={{class_description}}>{{description}}</p>
      <div class="sizes">
        <div>
          <p>{{small}}</p>
          <p>{{price_s}}</p>
        </div>
        <div>
          <p>{{medium}}</p>
          <p>{{price_m}}</p>
        </div>
        <div>
          <p>{{large}}</p>
          <p>{{price_l}}</p>
        </div>        
      </div>
    </div>
    
  `,
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent{
  
  @Input() class_card='';
  @Input() title='';
  @Input() description='';
  @Input() class_description='';
  @Input() small='';
  @Input() medium='';
  @Input() large='';
  @Input() price_s='';
  @Input() price_m='';
  @Input() price_l='';
}
