import { Component } from '@angular/core';
@Component({
  selector: 'app-skeleton',
  template: `
    <app-navigation></app-navigation>
    <div class="skeleton-content">
    <app-about-us></app-about-us>  
    <app-carousel [images]="images" [autoSlide]="true"></app-carousel>
    <app-whats-chat></app-whats-chat>
    <app-menu></app-menu>
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./skeleton.component.scss'],
})
export class SkeletonComponent {

 
  images = [
    {
      imageSrc: 
        'https://i.ibb.co/f2t0pcr/img1.jpg',
      imageAlt: 'imagen1',
    },
    {
      imageSrc: 
        'https://i.ibb.co/BqxxVDB/img2.jpg',
      imageAlt: 'imagen3',
    },
    {
      imageSrc: 
        'https://i.ibb.co/cQd9sYL/img3.jpg',
      imageAlt: 'imagen3',
    },
  ]
}
