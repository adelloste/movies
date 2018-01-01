import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { MovieService }         from './services/movie.service';
import { LoaderManagerService } from '../core/services/loader-manager.service';

import { Movie }           from './models/movie-detail';
import { Credits }         from './models/credits';
import { Similars }        from './models/similars';
import { Videos }          from './models/videos';
import { Recommendations } from './models/recommendations';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  credits         : Credits;
  detail          : Movie;
  similars        : Similars;
  recommendations : Recommendations;
  videos          : Videos;
  errorMessage    : string;

  constructor(
    private movieService: MovieService, 
    private route: ActivatedRoute,
    private loaderManagerService: LoaderManagerService
  ) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
    this.getMovie();
    this.getCredits();
    this.getSimilars();
    this.getRecommendations();
    this.getVideos();
  }

  getMovie() {
    this.route.data
        .subscribe((data: { detail: Movie }) => { this.detail = data.detail; }, error =>  this.errorMessage = <any>error);
  }

  getCredits() {
    this.route.data
        .subscribe((data: { credits: Credits }) => { this.credits = data.credits;  }, error =>  this.errorMessage = <any>error);
  }

  getSimilars() {
    this.route.data
        .subscribe((data: { similars: Similars }) => { this.similars = data.similars; }, error =>  this.errorMessage = <any>error);
  }

  getRecommendations() {
    this.route.data
        .subscribe((data: { recommendations: Recommendations }) => { this.recommendations = data.recommendations; }, error =>  this.errorMessage = <any>error);
  }

  getVideos() {
    this.route.data
        .subscribe((data: { videos: Videos }) => { this.videos = data.videos; }, error =>  this.errorMessage = <any>error);
  }

}
