import { LocalStorageModule }    from 'angular-2-local-storage';
import { AngularFireModule }     from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment }           from '../environments/environment';

import { BrowserModule }                                from '@angular/platform-browser';
import { NgModule, VERSION }                            from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ReactiveFormsModule }                          from '@angular/forms'; 

import { httpFactory }   from './shared/services/http.factory'; 
import { RoutingModule } from './app-routing.module';
import { SharedModule }  from './shared/shared.module';
import { MainModule }    from './main/main.module'
import { MoviesModule }  from './movies/movies.module';
import { MovieModule }   from './movie-detail/movie.module';
import { InfoModule }    from './info/info.module';
import { LoginModule }   from './login/login.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpModule,
    LoginModule,
    InfoModule,
    MoviesModule,
    MovieModule,
    MainModule,
    RoutingModule,
    LocalStorageModule.withConfig({ prefix: '', storageType: 'sessionStorage'}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
      {
          provide: Http,
          useFactory: httpFactory,
          deps: [XHRBackend, RequestOptions]
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
