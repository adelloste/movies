import { NgModule }     from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { InfoRoutingModule } from './info-routing.module';

import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    SharedModule,
    InfoRoutingModule
  ],
  declarations: [
    InfoComponent
  ]
})
export class InfoModule { }

