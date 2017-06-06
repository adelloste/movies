import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent }  from './header/header.component';
import { FooterComponent }  from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  exports: [ 
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})
export class SharedModule { }
