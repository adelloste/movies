import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { LoaderManagerService } from '../shared/services/loader-manager.service';

import { PopularTvs }     from './models/popular-tvs';
import { TopRatedTvs }    from './models/top-rated-tvs';
import { AiringTodayTvs } from './models/airing-today-tvs';
import { OnTheAirTvs }    from './models/on-the-air-tvs';

@Component({
  selector: 'tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  popularTVs: PopularTvs;
  topRatedTVs: TopRatedTvs;
  airingTodayTVs: AiringTodayTvs;
  onTheAirTVs: OnTheAirTvs;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private loaderManagerService: LoaderManagerService) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
    
    this.getPopularTv();
    this.getTopRatedTv();
    this.getAiringTodayTv();
    this.getOnTheAirTv();
  }

  getPopularTv() {
    this.route.data
        .subscribe((data: { popularTVs: PopularTvs }) => { this.popularTVs = data.popularTVs; }, error =>  this.errorMessage = <any>error);
  }

  getTopRatedTv() {
    this.route.data
      .subscribe((data: { topRatedTVs: TopRatedTvs }) => { this.topRatedTVs = data.topRatedTVs; }, error =>  this.errorMessage = <any>error);
  }

  getAiringTodayTv() {
    this.route.data
      .subscribe((data: { airingTodayTVs: AiringTodayTvs }) => { this.airingTodayTVs = data.airingTodayTVs; }, error =>  this.errorMessage = <any>error);
  }

  getOnTheAirTv() {
    this.route.data
        .subscribe((data: { onTheAirTVs: OnTheAirTvs }) => { this.onTheAirTVs = data.onTheAirTVs; }, error =>  this.errorMessage = <any>error);
  }
}
