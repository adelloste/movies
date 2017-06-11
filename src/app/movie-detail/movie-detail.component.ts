import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { MovieService } from './services/movie.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {

  errorMessage: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getMovie();
  }

  // Retrieve movie from server
  getMovie() {
    this.route.params
      .switchMap((params: Params) => this.movieService.getMovie(+params['id']))
      .subscribe(movie => { console.log(movie); }, error =>  this.errorMessage = <any>error);
  }

}
