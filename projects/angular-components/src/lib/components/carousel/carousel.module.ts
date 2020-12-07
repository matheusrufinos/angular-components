import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselComponent } from './carousel.component';
import { CarouselItemDirective } from './directives/carousel-item.directive';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [
        CarouselItemDirective,
        CarouselComponent],
    exports: [
        CarouselItemDirective,
        CarouselComponent]
})
export class LibCarouselModule { }
