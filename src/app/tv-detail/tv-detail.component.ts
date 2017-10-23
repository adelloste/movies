import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { LoaderManagerService } from '../core/services/loader-manager.service';

import { TvDetails }         from './models/tv-details';
import { TvCredits }         from './models/tv-credits';
import { TvSimilars }        from './models/tv-similars';
import { TvRecommendations } from './models/tv-recommendations';

@Component({
  selector: 'tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {

  detailTv: TvDetails;
  creditsTv: TvCredits;
  similarTv: TvSimilars;
  recommendationsTv: TvRecommendations;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private loaderManagerService: LoaderManagerService) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
    this.getTV();
    this.getCreditsTV();
    this.getSimilarTV();
    this.getRecommendationsTV();
  }

  getTV() {
    this.route.data
        .subscribe((data: { detailTV: TvDetails }) => { this.detailTv = data.detailTV; }, error =>  this.errorMessage = <any>error);
  }

  getCreditsTV() {
    this.route.data
        .subscribe((data: { creditsTV: TvCredits }) => { this.creditsTv = data.creditsTV; }, error =>  this.errorMessage = <any>error);
  }

  getSimilarTV() {
    this.route.data
        .subscribe((data: { similarTV: TvSimilars }) => { this.similarTv = data.similarTV; }, error =>  this.errorMessage = <any>error);
  }

  getRecommendationsTV() {
    this.route.data
        .subscribe((data: { recommendationsTV: TvRecommendations }) => { this.recommendationsTv = data.recommendationsTV; }, error =>  this.errorMessage = <any>error);
  }

}
