import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

import { LoaderManagerService } from '../core/services/loader-manager.service';

import { PopularMovies }    from '../core/models/popular-movies';
import { NowPlayingMovies } from '../core/models/now-playing-movies';
import { TopRatedMovies }   from '../core/models/top-rated-movies';
import { UpcomingMovies }   from '../core/models/upcoming-movies';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  popularMovies    : PopularMovies;
  nowPlayingMovies : NowPlayingMovies;
  topRatedMovies   : TopRatedMovies;
  upcomingMovies   : UpcomingMovies;
  errorMessage     : string;

  constructor(
    private route: ActivatedRoute,
    private loaderManagerService: LoaderManagerService
  ) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);

    this.getPopularMovies();
    this.getNowPlayingMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
  }

  getPopularMovies() {
    this.route.data
        .subscribe((data: { popularMovies: any }) => { this.popularMovies = data.popularMovies; }, error =>  this.errorMessage = <any>error);
  }

  getNowPlayingMovies() {
    this.route.data
        .subscribe((data: { nowPlayingMovies: any }) => { this.nowPlayingMovies = data.nowPlayingMovies; }, error =>  this.errorMessage = <any>error);
  }

  getTopRatedMovies() {
    this.route.data
        .subscribe((data: { topRatedMovies: any }) => { this.topRatedMovies = data.topRatedMovies; }, error =>  this.errorMessage = <any>error);
  }

  getUpcomingMovies() {
    this.route.data
        .subscribe((data: { upcomingMovies: any }) => { this.upcomingMovies = data.upcomingMovies; }, error =>  this.errorMessage = <any>error);
  }
}

