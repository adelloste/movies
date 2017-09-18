import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { TvDetailComponent }       from './tv-detail.component';
import { TvDetailService }         from './services/tv-detail.service';
import { TvDetailResolverService } from './services/tv-detail-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TvDetailComponent
  ],
  providers: [
    TvDetailService,
    TvDetailResolverService
  ]
})
export class TvDetailModule { }
