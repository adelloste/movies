import {
  Component,
  Input, 
  OnInit, 
  AfterViewInit, 
  OnChanges, 
  OnDestroy, 
  ChangeDetectionStrategy, 
  HostListener 
} from '@angular/core';

@Component({
  selector: 'slider-detail',
  templateUrl: './slider-detail.component.html',
  styleUrls: ['./slider-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderDetailComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() items: any;
  @Input() title: string;
  @Input() url: string;
  @Input() section: string;

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

  ngOnChanges() {
    // Intercept input property changes and update swiper instance
    if(this[this.swiperId]) {
      this[this.swiperId].update();
      this[this.swiperId].slideTo(0);
      console.log(this[this.swiperId]);
    }
  }

  ngOnDestroy() {
    // Clear internal Swiper instance
    this[this.swiperId].destroy(true);
    this[this.swiperId] = undefined;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(this[this.swiperId]) {
      this[this.swiperId].update();
    }
  }
}
