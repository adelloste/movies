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

import { AuthService }    from '../login/services/auth.service';
import { SidenavService } from './services/sidenav.service';

import { TruncatePipe }     from './pipes/truncate.pipe';
import { BgDetailComponent } from './bg-detail/bg-detail.component';
import { InfoDetailComponent } from './info-detail/info-detail.component';
// import { SliderComponent } from './slider/slider.component';
import { SlideCreditComponent } from './slide-credit/slide-credit.component';
import { SliderDetailComponent } from './slider-detail/slider-detail.component';

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
    // SliderComponent,
    SlideCreditComponent,
    SliderDetailComponent,
    TruncatePipe
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
    SliderDetailComponent,
    // SliderComponent,
    TruncatePipe
  ],
  providers: [
    AuthService,
    SidenavService
  ]
})
export class SharedModule { }
