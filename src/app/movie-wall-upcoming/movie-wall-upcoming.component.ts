import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { UpcomingMovies } from '../core/models/upcoming-movies';

import { UpcomingMoviesService } from '../core/services/upcoming-movies.service';
import { LoaderManagerService }  from '../core/services/loader-manager.service';

@Component({
  selector: 'movie-wall-upcoming',
  templateUrl: './movie-wall-upcoming.component.html',
  styleUrls: ['./movie-wall-upcoming.component.scss']
})
export class MovieWallUpcomingComponent implements OnInit {

  series       : any = [];
  index        : number = 2;
  totalPages   : number;
  isLoading    : boolean = false;
  errorMessage : string;

  constructor(
    private route: ActivatedRoute, 
    private upcomingMoviesService: UpcomingMoviesService, 
    private loaderManagerService: LoaderManagerService
  ) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);

    this.getPopularMovie();
  };

  getPopularMovie() {
    this.route.data.subscribe(
      (data: { upcomingMovie: UpcomingMovies }) => {
        this.series     = this.series.concat(data.upcomingMovie.results);
        this.totalPages = data.upcomingMovie.total_pages;
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.upcomingMoviesService.getUpcomingMovies(this.index).subscribe(
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
