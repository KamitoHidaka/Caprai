import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-button',
  template: `
    <p class={{class}}>{{text}}</p>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 @Input() text='';
 @Input() class='';

}
