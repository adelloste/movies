import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Params }                 from '@angular/router';

import { NowPlayingMovies } from '../core/models/now-playing-movies';

import { NowPlayingMoviesService } from '../core/services/now-playing-movies.service';
import { LoaderManagerService }    from '../core/services/loader-manager.service';

@Component({
  selector: 'movie-wall-now-playing',
  templateUrl: './movie-wall-now-playing.component.html',
  styleUrls: ['./movie-wall-now-playing.component.scss']
})
export class MovieWallNowPlayingComponent implements OnInit {

  series       : any = [];
  index        : number = 2;
  totalPages   : number;
  isLoading    : boolean = false;
  errorMessage : string;

  constructor(
    private route: ActivatedRoute, 
    private nowPlayingMoviesService: NowPlayingMoviesService, 
    private loaderManagerService: LoaderManagerService
  ) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);

    this.getPopularMovie();
  };

  getPopularMovie() {
    this.route.data.subscribe(
      (data: { nowPlayingMovie: NowPlayingMovies }) => {
        this.series     = this.series.concat(data.nowPlayingMovie.results);
        this.totalPages = data.nowPlayingMovie.total_pages;
      },
      error =>  {
        this.errorMessage = <any>error
      }
    );
  }

  loadMore() {
    this.nowPlayingMoviesService.getNowPlayingMovies(this.index).subscribe(
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
