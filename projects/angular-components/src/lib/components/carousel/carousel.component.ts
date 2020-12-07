import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { CarouselItemDirective } from './directives/carousel-item.directive';

@Component({
  selector: 'lib-carousel',
  exportAs: 'lib-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChild('carouselItem', { read: ElementRef }) readonly itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') readonly carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  itemWidth = 0;
  currentSlide = 0;


  ngAfterViewInit() {
    this.itemWidth = this.itemsElements['nativeElement'].getBoundingClientRect().width;
  }

  next() {
    if (this.currentSlide + 1 === this.items.length) return;

    this.currentSlide = (this.currentSlide + 1) % this.items.length;
  }

  prev() {
    if (this.currentSlide === 0) return;

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
  }

}
