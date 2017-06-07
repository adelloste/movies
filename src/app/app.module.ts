import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { RoutingModule } from './app-routing.module';
import { SharedModule }  from './shared/shared.module';
import { MainModule }    from './main/main.module'
import { MoviesModule }  from './movies/movies.module';
import { InfoModule }    from './info/info.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    InfoModule,
    MoviesModule,
    MainModule,
    RoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
