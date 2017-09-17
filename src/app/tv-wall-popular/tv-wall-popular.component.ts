import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { PopularTvs }       from '../tv/models/popular-tvs';
import { PopularTvService } from '../tv/services/popular-tv.service';

@Component({
  selector: 'tv-wall-popular',
  templateUrl: './tv-wall-popular.component.html',
  styleUrls: ['./tv-wall-popular.component.scss']
})
export class TvWallPopularComponent implements OnInit {

  series: any = [];
  index: number = 2;
  totalPages: number;
  isLoading: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private popularTvService: PopularTvService) { }

  ngOnInit() {
    this.getPopularTv();
  };

  getPopularTv() {
    this.route.data.subscribe(
      (data: { popularTV: PopularTvs }) => {
        this.series = this.series.concat(data.popularTV["results"]);
        this.totalPages = data.popularTV["total_pages"];
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.popularTvService.getPopularTV(this.index).subscribe(
      tvs => {
        this.series = this.series.concat(tvs["results"]);
        this.index++;
        this.isLoading = false;
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  // Listener on scroll
  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    //Logic To Check whether we are bottom of the page
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // On Scroll Down
      if(this.index <= this.totalPages && !this.isLoading) {
        this.isLoading = true;
        this.loadMore();
      }
    }
  }

}
