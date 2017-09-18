import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TvWallOnTheAirComponent } from './tv-wall-on-the-air.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TvWallOnTheAirComponent
  ]
})
export class TvWallOnTheAirModule { }
