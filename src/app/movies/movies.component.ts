import { Component, OnInit } from '@angular/core';

import { MoviesService } from './services/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

  // TODO: Correggere il type in ogni Movie

  movies: any[] = [];
  errorMessage: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }

  // Retvie movies from server
  getMovies() {
    this.moviesService.getMovies()
                      .subscribe(movies => {this.movies = movies.results;}, error =>  this.errorMessage = <any>error);
  }
}

