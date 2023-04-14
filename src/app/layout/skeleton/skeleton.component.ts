import { Component } from '@angular/core';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skeleton',
  template: `
  <div class="root">
      <div class="skeleton-content">
        <app-navigation></app-navigation>
        <app-about-us></app-about-us>
        <app-carousel [images]="images" [autoSlide]="true"></app-carousel>
        <app-menu></app-menu>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
        <fa-icon
          (click)="toHome()"
          class="arrow_up"
          [icon]="faCircleArrowUp"
        ></fa-icon>
      </div>
      </div>
  `,
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {
  faCircleArrowUp = faCircleArrowUp;

  toHome() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  images = [
    {
      imageSrc: 'assets/pizza.jpg',
      imageAlt: 'imagen1',
    },
    {
      imageSrc: 'assets/img2.jpg',
      imageAlt: 'imagen2',
    },
    {
      imageSrc: 'assets/img3.jpg',
      imageAlt: 'imagen3',
    },
  ];
}
