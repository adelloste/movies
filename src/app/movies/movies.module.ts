import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MoviesComponent }        from './movies.component';
import { CardComponent }          from './components/card/card.component';
import { PaginationComponent }    from './components/pagination/pagination.component';
import { SearchComponent }        from './components/search/search.component';

import { MoviesService }          from './services/movies.service';
import { SearchService }          from './services/search.service';
import { IndexPaginationService } from './services/index-pagination.service';
import { SearchPopupComponent } from './components/search-popup/search-popup.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    MoviesComponent,
    CardComponent,
    PaginationComponent,
    SearchComponent,
    SearchPopupComponent
  ],
  providers: [ MoviesService, IndexPaginationService, SearchService ]
})
export class MoviesModule { }
