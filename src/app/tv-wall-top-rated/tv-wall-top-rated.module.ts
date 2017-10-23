import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TvWallTopRatedComponent } from './tv-wall-top-rated.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TvWallTopRatedComponent
  ]
})
export class TvWallTopRatedModule { }
