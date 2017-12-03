import { 
  Component, 
  Input, 
  OnInit, 
  AfterViewInit, 
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() tvs: any;
  @Input() title: string;
  @Input() url: string;

  swiperId: string;

  constructor() {
    // Generate random id
    this.swiperId = "swiper-" + Math.floor(Math.random() * 1000);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    // Initialize Swiper
    this[this.swiperId] = new Swiper('.' + this.swiperId, {
      initialSlide: 0,
      direction: "horizontal",
      slidesPerView: "auto",
      slidesPerGroup: 2,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      observer: true,
      observeParents: true
    });
  }

  ngOnDestroy() {
    // Clear internal Swiper instance (https://github.com/nolimits4web/Swiper/issues/1367)
    this[this.swiperId].destroy(true);
    this[this.swiperId] = undefined;
  }

}
