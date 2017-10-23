import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';

import { LoaderManagerService }  from './services/loader-manager.service';
import { StorageManagerService } from './services/storage-manager.service';

import { AiringTodayTvService } from './services/airing-today-tv.service';
import { PopularTvService }     from './services/popular-tv.service';
import { TopRatedTvService }    from './services/top-rated-tv.service';
import { OnTheAirTvService }    from './services/on-the-air-tv.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    LoaderManagerService,
    StorageManagerService,
    AiringTodayTvService,
    PopularTvService,
    TopRatedTvService,
    OnTheAirTvService
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
        OnTheAirTvService
      ]
    };
  }
}
