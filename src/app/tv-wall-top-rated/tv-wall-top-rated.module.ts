import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TvWallTopRatedComponent } from './tv-wall-top-rated.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TvWallTopRatedComponent
  ]
})
export class TvWallTopRatedModule { }
