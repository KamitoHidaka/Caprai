import { Component } from '@angular/core';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footer-container">
      <a
        href="https://www.facebook.com/profile.php?id=100063890592729"
        target="_blank"
      >
        <fa-icon [icon]="faFacebook"></fa-icon>
      </a>

      <a href="https://www.instagram.com/capraia_pizzeria" target="_blank">
        <fa-icon [icon]="faInstagram"></fa-icon>
      </a>

      <a href="">
      </a>
    </div>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
}
