import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { OnTheAirTvs } from '../core/models/on-the-air-tvs';

import { OnTheAirTvService }    from '../core/services/on-the-air-tv.service';
import { LoaderManagerService } from '../core/services/loader-manager.service';

@Component({
  selector: 'tv-wall-on-the-air',
  templateUrl: './tv-wall-on-the-air.component.html',
  styleUrls: ['./tv-wall-on-the-air.component.scss']
})
export class TvWallOnTheAirComponent implements OnInit {

  series: any = [];
  index: number = 2;
  totalPages: number;
  isLoading: boolean = false;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private onTheAirTvService: OnTheAirTvService, private loaderManagerService: LoaderManagerService) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
    this.getOnTheAirTv();
  };

  getOnTheAirTv() {
    this.route.data.subscribe(
      (data: { onTheAirTV: OnTheAirTvs }) => {
        this.series = this.series.concat(data.onTheAirTV["results"]);
        this.totalPages = data.onTheAirTV["total_pages"];
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.onTheAirTvService.getOnTheAirTV(this.index).subscribe(
      tvs => {
        this.loaderManagerService.changeStatus(false);
        this.series = this.series.concat(tvs["results"]);
        this.index++;
        this.isLoading = false;
      },
      error =>  {
        this.loaderManagerService.changeStatus(false);
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
        this.loaderManagerService.changeStatus(true);
        this.isLoading = true;
        this.loadMore();
      }
    }
  }

}
