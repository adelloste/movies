import { AngularFireModule }     from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment }           from '../environments/environment';

import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { HttpModule }          from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'; 

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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
