import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';
import { ImgSlideComponent } from './img-slide/img-slide.component';
// @ts-ignore
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class ImgSliderModule { }
