import { LocalStorageModule }    from 'angular-2-local-storage';
import { AngularFireModule }     from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment }           from '../environments/environment';

import { BrowserModule }                                from '@angular/platform-browser';
import { BrowserAnimationsModule }                      from '@angular/platform-browser/animations';
import { NgModule, VERSION, APP_INITIALIZER }           from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ReactiveFormsModule }                          from '@angular/forms'; 

import { httpFactory }             from './shared/services/http.factory'; 
import { AppInitService }          from './app-init.service';
import { RoutingModule }           from './app-routing.module';
import { SharedModule }            from './shared/shared.module';
import { MainModule }              from './main/main.module'
import { MoviesModule }            from './movies/movies.module';
import { MovieModule }             from './movie-detail/movie.module';
import { TvModule }                from './tv/tv.module';
import { TvWallPopularModule }     from './tv-wall-popular/tv-wall-popular.module';
import { TvWallTopRatedModule }    from './tv-wall-top-rated/tv-wall-top-rated.module';
import { TvWallOnTheAirModule }    from './tv-wall-on-the-air/tv-wall-on-the-air.module';
import { TvWallAiringTodayModule } from './tv-wall-airing-today/tv-wall-airing-today.module';
import { InfoModule }              from './info/info.module';
import { LoginModule }             from './login/login.module';
import { NotFoundModule }          from './not-found/not-found.module';

import { AppComponent }  from './app.component';

export function appInitFactory(appInitService: AppInitService): Function {
    return () => appInitService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    LoginModule,
    InfoModule,
    MoviesModule,
    MovieModule,
    TvModule,
    TvWallPopularModule,
    TvWallTopRatedModule,
    TvWallOnTheAirModule,
    TvWallAiringTodayModule,
    MainModule,
    NotFoundModule,
    RoutingModule,
    LocalStorageModule.withConfig({ prefix: '', storageType: 'sessionStorage'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AppInitService,
    {
        provide: APP_INITIALIZER,
        useFactory: appInitFactory,
        deps: [AppInitService, Http],
        multi: true
    },
    {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
