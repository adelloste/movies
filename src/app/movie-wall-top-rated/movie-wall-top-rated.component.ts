import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { TopRatedMovies } from '../core/models/top-rated-movies';

import { TopRatedMoviesService } from '../core/services/top-rated-movies.service';
import { LoaderManagerService }  from '../core/services/loader-manager.service';

@Component({
  selector: 'movie-wall-top-rated',
  templateUrl: './movie-wall-top-rated.component.html',
  styleUrls: ['./movie-wall-top-rated.component.scss']
})
export class MovieWallTopRatedComponent implements OnInit {

  series       : any = [];
  index        : number = 2;
  totalPages   : number;
  isLoading    : boolean = false;
  errorMessage : string;

  constructor(
    private route: ActivatedRoute, 
    private topRatedMoviesService: TopRatedMoviesService, 
    private loaderManagerService: LoaderManagerService
  ) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);

    this.getPopularMovie();
  };

  getPopularMovie() {
    this.route.data.subscribe(
      (data: { topRatedMovie: TopRatedMovies }) => {
        this.series     = this.series.concat(data.topRatedMovie.results);
        this.totalPages = data.topRatedMovie.total_pages;
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.topRatedMoviesService.getTopratedMovies(this.index).subscribe(
      movies => {
        this.loaderManagerService.changeStatus(false);
        this.series = this.series.concat(movies.results);
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
