import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { MovieService }         from './services/movie.service';
import { LoaderManagerService } from '../shared/services/loader-manager.service';

import { Movie }           from './models/movie-detail';
import { Credits }         from './models/credits';
import { Recommendation }  from './models/recommendation';
import { Recommendations } from './models/recommendations';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  actors: Credits;
  movie: Movie;
  recommendations: Array<Recommendation>;
  errorMessage: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private loaderManagerService: LoaderManagerService) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
    this.getMovie();
    this.getCredits();
    this.getRecommendation();
  }

  // Retrieve movie-detail from server
  getMovie() {
    this.route.data
        .subscribe((data: { movie: Movie }) => { this.movie = data.movie; }, error =>  this.errorMessage = <any>error);
  }

  // Retrieve credits from server
  getCredits() {
    this.route.data
        .subscribe((data: { credits: Credits }) => { this.actors = data.credits["cast"].slice(0, 6);  }, error =>  this.errorMessage = <any>error);
  }

  // Retrieve recommendation from server
  getRecommendation() {
    this.route.data
        .subscribe((data: { recommendation: Recommendations }) => { this.recommendations = data.recommendation["results"].slice(0, 6); }, error =>  this.errorMessage = <any>error);
  }

}
