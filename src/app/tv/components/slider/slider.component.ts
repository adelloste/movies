import { Component, Input, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterViewInit {

  @Input() tvs: any;
  @Input() title: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Initialize Swiper
    let swiper = new Swiper('.swiper-container', {
      initialSlide: 0,
      direction: "horizontal",
      slidesPerView: "auto",
      slidesPerGroup: 2,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    });
  }

}
