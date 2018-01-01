import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { LoaderComponent }      from './components/loader/loader.component';
import { ModalSearchComponent } from './components/modal-search/modal-search.component';
import { ModalVideoComponent }  from './components/modal-video/modal-video.component';

import { LoaderManagerService }  from './services/loader-manager.service';
import { StorageManagerService } from './services/storage-manager.service';
import { DomService }            from './services/dom.service';

import { SearchService }           from './services/search.service';
import { AiringTodayTvService }    from './services/airing-today-tv.service';
import { PopularTvService }        from './services/popular-tv.service';
import { TopRatedTvService }       from './services/top-rated-tv.service';
import { OnTheAirTvService }       from './services/on-the-air-tv.service';
import { PopularMoviesService }    from './services/popular-movies.service';
import { NowPlayingMoviesService } from './services/now-playing-movies.service';
import { UpcomingMoviesService }   from './services/upcoming-movies.service';
import { TopRatedMoviesService }   from './services/top-rated-movies.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoaderComponent,
    ModalSearchComponent,
    ModalVideoComponent
  ],
  exports: [
    LoaderComponent,
    ModalSearchComponent,
    ModalVideoComponent
  ],
  providers: [
    LoaderManagerService,
    StorageManagerService,
    DomService,
    SearchService,
    AiringTodayTvService,
    PopularTvService,
    TopRatedTvService,
    OnTheAirTvService,
    PopularMoviesService,
    NowPlayingMoviesService,
    UpcomingMoviesService,
    TopRatedMoviesService
  ],
  entryComponents: [
    ModalSearchComponent,
    ModalVideoComponent
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        LoaderManagerService,
        StorageManagerService,
        AiringTodayTvService,
        PopularTvService,
        TopRatedTvService,
        OnTheAirTvService,
        PopularMoviesService,
        NowPlayingMoviesService,
        UpcomingMoviesService,
        TopRatedMoviesService
      ]
    };
  }
}
