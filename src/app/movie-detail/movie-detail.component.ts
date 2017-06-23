import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { MovieService } from './services/movie.service';

import { Movie } from './models/movie-detail';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  errorMessage: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getMovie();
    this.getCredits();
  }

  // Retrieve movie-detail from server
  getMovie() {
    this.route.data
        .subscribe((data: { movie: any }) => {

          console.log(data.movie);

          this.movie = data.movie;
        }, error =>  this.errorMessage = <any>error);
  }

  // Retrieve credits from server
  getCredits() {
    this.route.data
        .subscribe((data: { credits: any }) => { console.log(data.credits); }, error =>  this.errorMessage = <any>error);
  }

}
