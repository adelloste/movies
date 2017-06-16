import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent }       from './header/header.component';
import { FooterComponent }       from './footer/footer.component';
import { SidenavComponent }      from './sidenav/sidenav.component';
import { AccountManagerService } from './services/account-manager.service';
import { TruncatePipe }          from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    TruncatePipe
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    TruncatePipe
  ],
  providers: [
    AccountManagerService
  ]
})
export class SharedModule { }
