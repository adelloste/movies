import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent }             from './header/header.component';
import { FooterComponent }             from './footer/footer.component';
import { SidenavComponent }            from './sidenav/sidenav.component';
import { LoaderComponent }             from './loader/loader.component';
import { SlideTwoThirdsComponent }     from './slide-two-thirds/slide-two-thirds.component';
import { SlideThreeQuartersComponent } from './slide-three-quarters/slide-three-quarters.component';
import { WallComponent }               from './wall/wall.component';

import { AuthService }           from '../login/services/auth.service';
import { StorageManagerService } from './services/storage-manager.service';
import { SidenavService }        from './services/sidenav.service';
import { LoaderManagerService }  from './services/loader-manager.service';

import { TruncatePipe }     from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoaderComponent,
    SlideTwoThirdsComponent,
    SlideThreeQuartersComponent,
    TruncatePipe,
    WallComponent
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    LoaderComponent,
    SlideTwoThirdsComponent,
    SlideThreeQuartersComponent,
    WallComponent,
    TruncatePipe
  ],
  providers: [
    AuthService,
    StorageManagerService,
    SidenavService,
    LoaderManagerService
  ]
})
export class SharedModule { }
