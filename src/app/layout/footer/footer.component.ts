import { Component } from '@angular/core';
import {faInstagram,faFacebook} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer-container">
      <fa-icon [icon]="faInstagram"></fa-icon>
      <fa-icon [icon]="faFacebook"></fa-icon>
    </div>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;

}
