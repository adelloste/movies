import { NgModule } from '@angular/core';

import { SharedModule }        from '../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesComponent }        from './movies.component';
import { CardComponent }          from './components/card/card.component';
import { PaginationComponent }    from './components/pagination/pagination.component';
import { SearchComponent }        from './components/search/search.component';
import { SearchPopupComponent }   from './components/search-popup/search-popup.component';

import { SearchService }          from './services/search.service';
import { IndexPaginationService } from './services/index-pagination.service';

import { PopularMoviesResolverService } from './services/popular-movies-resolver.service';
import { UpcomingResolverService }      from './services/upcoming-resolver.service';
import { TopRatedResolverService }      from './services/top-rated-resolver.service';
import { NowPlayingResolverService }    from './services/now-playing-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesComponent,
    CardComponent,
    PaginationComponent,
    SearchComponent,
    SearchPopupComponent
  ],
  providers: [
    IndexPaginationService, 
    SearchService,
    PopularMoviesResolverService,
    UpcomingResolverService,
    TopRatedResolverService,
    NowPlayingResolverService
  ]
})
export class MoviesModule { }
