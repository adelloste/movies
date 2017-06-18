import { Component, OnInit } from '@angular/core';

import { Movies }        from './models/movies';
import { Movie }         from './models/movie';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

  currentPage: number;
  totalPage: number;

  movies: Array<Movie> = [];
  errorMessage: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies(1);
  }

  // Retrieve movies from server
  getMovies(index: number) {
    this.moviesService.getMovies(index).subscribe(movies => {

      this.movies      = movies.results;
      this.currentPage = movies.page;
      this.totalPage   = movies.total_pages;
      
      // Scroll top view
      window.scrollTo(0, 0);

    }, error =>  this.errorMessage = <any>error);
  }

  // Change page
  changePage(index: number) {
    this.getMovies(index);
  }
}

