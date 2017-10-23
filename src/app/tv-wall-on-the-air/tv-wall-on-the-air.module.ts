import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TvWallOnTheAirComponent } from './tv-wall-on-the-air.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TvWallOnTheAirComponent
  ]
})
export class TvWallOnTheAirModule { }
