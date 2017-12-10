import { 
  Component, 
  Input, 
  Output,
  EventEmitter,
  OnInit, 
  AfterViewInit, 
  OnChanges,
  OnDestroy,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slider-search',
  templateUrl: './slider-search.component.html',
  styleUrls: ['./slider-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderSearchComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @Input() tvs: any;
  @Input() title: string;
  @Input() section: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

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
  onSelected(item: any) {
    // Destroy modal
    this.close.emit();
    // Redirect to detail
    item.type == "tv" && this.router.navigate(['/main/tv', item.id]);
    item.type == "movie" && this.router.navigate(['/main/movies', item.id]);
  }

  ngOnDestroy() {
    // Clear internal Swiper instance (https://github.com/nolimits4web/Swiper/issues/1367)
    this[this.swiperId].destroy(true);
    this[this.swiperId] = undefined;
  }

}
