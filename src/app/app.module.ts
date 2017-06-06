import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { RoutingModule } from './app-routing.module';
import { SharedModule }  from './shared/shared.module';
import { MoviesModule }  from './movies/movies.module'

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    MoviesModule,
    RoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
