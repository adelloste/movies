import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { TopRatedTvs }       from '../tv/models/top-rated-tvs';
import { TopRatedTvService } from '../tv/services/top-rated-tv.service';

@Component({
  selector: 'tv-wall-top-rated',
  templateUrl: './tv-wall-top-rated.component.html',
  styleUrls: ['./tv-wall-top-rated.component.scss']
})
export class TvWallTopRatedComponent implements OnInit {

  series: any = [];
  index: number = 2;
  totalPages: number;
  isLoading: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private topRatedTvService: TopRatedTvService) { }

  ngOnInit() {
    this.getPopularTv();
  };

  getPopularTv() {
    this.route.data.subscribe(
      (data: { topRatedTV: TopRatedTvs }) => {
        this.series = this.series.concat(data.topRatedTV["results"]);
        this.totalPages = data.topRatedTV["total_pages"];
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.topRatedTvService.getTopRatedTV(this.index).subscribe(
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
