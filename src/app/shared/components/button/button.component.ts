import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-button',
  template: `
    <a href={{href}} class={{class}} target={{target}}>
      {{text}}
    </a>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 @Input() text='';
 @Input() class='';
 @Input() href='';
 @Input() target='';
 @Input() sc='';
}
