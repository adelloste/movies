import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { TvWallPopularComponent } from './tv-wall-popular.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    TvWallPopularComponent
  ]
})
export class TvWallPopularModule { }
