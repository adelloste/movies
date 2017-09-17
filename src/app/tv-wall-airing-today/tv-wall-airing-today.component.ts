import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { AiringTodayTvs }       from '../tv/models/airing-today-tvs';
import { AiringTodayTvService } from '../tv/services/airing-today-tv.service';

@Component({
  selector: 'tv-wall-airing-today',
  templateUrl: './tv-wall-airing-today.component.html',
  styleUrls: ['./tv-wall-airing-today.component.scss']
})
export class TvWallAiringTodayComponent implements OnInit {

  series: any = [];
  index: number = 2;
  totalPages: number;
  isLoading: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private airingTodayTvService: AiringTodayTvService) { }

  ngOnInit() {
    this.getOnTheAirTv();
  };

  getOnTheAirTv() {
    this.route.data.subscribe(
      (data: { airingTodayTV: AiringTodayTvs }) => {
        this.series = this.series.concat(data.airingTodayTV["results"]);
        this.totalPages = data.airingTodayTV["total_pages"];
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.airingTodayTvService.getAiringTodayTV(this.index).subscribe(
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
