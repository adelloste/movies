import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { PopularMovies } from '../core/models/popular-movies';

import { PopularMoviesService } from '../core/services/popular-movies.service';
import { LoaderManagerService } from '../core/services/loader-manager.service';

@Component({
  selector: 'movie-wall-popular',
  templateUrl: './movie-wall-popular.component.html',
  styleUrls: ['./movie-wall-popular.component.scss']
})
export class MovieWallPopularComponent implements OnInit {

  series       : any = [];
  index        : number = 2;
  totalPages   : number;
  isLoading    : boolean = false;
  errorMessage : string;

  constructor(
    private route: ActivatedRoute, 
    private popularMoviesService: PopularMoviesService, 
    private loaderManagerService: LoaderManagerService
  ) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);

    this.getPopularMovie();
  };

  getPopularMovie() {
    this.route.data.subscribe(
      (data: { popularMovie: PopularMovies }) => {
        this.series     = this.series.concat(data.popularMovie.results);
        this.totalPages = data.popularMovie.total_pages;
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.popularMoviesService.getPopularMovies(this.index).subscribe(
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
