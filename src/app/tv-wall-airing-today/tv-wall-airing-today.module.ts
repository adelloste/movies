import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TvWallAiringTodayComponent } from './tv-wall-airing-today.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TvWallAiringTodayComponent
  ]
})
export class TvWallAiringTodayModule { }
