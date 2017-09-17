import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TvWallAiringTodayComponent } from './tv-wall-airing-today.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TvWallAiringTodayComponent
  ]
})
export class TvWallAiringTodayModule { }
