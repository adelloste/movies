import { LocalStorageModule }    from 'angular-2-local-storage';
import { AngularFireModule }     from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment }           from '../environments/environment';

import { BrowserModule }                       from '@angular/platform-browser';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';
import { NgModule, VERSION, APP_INITIALIZER }  from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthInterceptor } from './auth-interceptor';
import { AppInitService }  from './app-init.service';
import { RoutingModule }   from './app-routing.module';
import { CoreModule }      from './core/core.module';
import { SharedModule }    from './shared/shared.module';
import { NotFoundModule }  from './not-found/not-found.module';

import { AppComponent }  from './app.component';

export function appInitFactory(appInitService: AppInitService): Function {
    return () => appInitService.load();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
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
        deps: [ AppInitService ],
        multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
