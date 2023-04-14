import { Component, Input, OnInit } from '@angular/core';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';

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
        class="fade-animation"
      />
      <div *ngIf="indicators" class="carousel-dot">
        <span
          *ngFor="let dot of images; let i = index"
          class="dot "
          [ngClass]="{ active: selectedIndex === i }"
          (click)="selectImage(i)"
        >
        </span>
      </div>

      <div
        *ngIf="controls"
        class="button-carousel button-prev"
        (click)="onPrevClick()"
      >
        <fa-icon class="icon-carousel" [icon]="faCircleArrowLeft"></fa-icon>
      </div>
      <div
        *ngIf="controls"
        class="button-carousel button-next"
        (click)="onNextClick()"
      >
        <fa-icon class="icon-carousel" [icon]="faCircleArrowRight"></fa-icon>
      </div>
    </div>
  `,
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  faCircleArrowLeft = faCircleArrowLeft;
  faCircleArrowRight = faCircleArrowRight;

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3500; // 4 seconds

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
}
