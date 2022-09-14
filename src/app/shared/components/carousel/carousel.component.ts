import { Component, Input } from '@angular/core';

interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  template: `
    <div *ngIf="images && images.length > 0" class="carousel-container">
      <img
        *ngFor="let image of images; let i = index"
        [src]="image.imageSrc"
        [alt]="image.imageAlt"
        [ngClass]="{ 'image-active': selectedIndex === i }"
      />
    </div>
  `,
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() images: carouselImage[] = [];

  selectedIndex = 0;
}
