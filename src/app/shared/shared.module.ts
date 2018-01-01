import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent }             from './header/header.component';
import { FooterComponent }             from './footer/footer.component';
import { SidenavComponent }            from './sidenav/sidenav.component';
import { SlideTwoThirdsComponent }     from './slide-two-thirds/slide-two-thirds.component';
import { SlideThreeQuartersComponent } from './slide-three-quarters/slide-three-quarters.component';
import { WallComponent }               from './wall/wall.component';
import { BgDetailComponent }           from './bg-detail/bg-detail.component';
import { InfoDetailComponent }         from './info-detail/info-detail.component';
import { SliderComponent }             from './slider/slider.component';
import { SlideCreditComponent }        from './slide-credit/slide-credit.component';
import { SliderSearchComponent }       from './slider-search/slider-search.component';
import { SlideSearchComponent }        from './slide-search/slide-search.component';
import { ToastComponent }              from './toast/toast.component';
import { TrailerComponent }            from './trailer/trailer.component';

import { AuthService }    from '../login/services/auth.service';
import { SidenavService } from './services/sidenav.service';

import { TruncatePipe } from './pipes/truncate.pipe';
import { TrustUrlPipe } from './pipes/trust-url.pipe';

import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SlideTwoThirdsComponent,
    SlideThreeQuartersComponent,
    WallComponent,
    BgDetailComponent,
    InfoDetailComponent,
    SliderComponent,
    SlideCreditComponent,
    TruncatePipe,
    SliderSearchComponent,
    SlideSearchComponent,
    AutofocusDirective,
    ToastComponent,
    TrustUrlPipe,
    TrailerComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    SlideTwoThirdsComponent,
    SlideThreeQuartersComponent,
    WallComponent,
    BgDetailComponent,
    InfoDetailComponent,
    SlideCreditComponent,
    SliderComponent,
    TruncatePipe,
    SliderSearchComponent,
    SlideSearchComponent,
    AutofocusDirective,
    ToastComponent,
    TrustUrlPipe,
    TrailerComponent
  ],
  entryComponents: [
    ToastComponent
  ],
  providers: [
    AuthService,
    SidenavService
  ]
})
export class SharedModule { }
