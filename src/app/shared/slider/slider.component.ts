import { 
  Component, 
  Input, 
  OnInit, 
  AfterViewInit, 
  OnChanges,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() tvs: any;
  @Input() title: string;
  @Input() section: string;
  @Input() url: string;
  @Input() all: boolean;

  swiperId: string;

  constructor(private router: Router) {
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
      setTimeout(() => {
        this[this.swiperId].update();
        this[this.swiperId].slideTo(0);
      }, 0);
    }
  }

  // In base alla section passata dal componente padre effettuo la redirect
  onSelected(id: string) {
    this.section == "tv" && this.router.navigate(['/main/tv', id]);
    this.section == "actors" && console.log("Coming soon...");
  }

  ngOnDestroy() {
    // Clear internal Swiper instance (https://github.com/nolimits4web/Swiper/issues/1367)
    this[this.swiperId].destroy(true);
    this[this.swiperId] = undefined;
  }

}
