import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TvWallPopularComponent } from './tv-wall-popular.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TvWallPopularComponent
  ]
})
export class TvWallPopularModule { }
