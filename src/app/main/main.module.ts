import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainGuard }             from './main.guard';
import { StorageManagerService } from "../shared/services/storage-manager.service";
import { MainRoutingModule }     from './main-routing.module';
import { SharedModule }          from '../shared/shared.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ],
  providers: [
    MainGuard,
    StorageManagerService
  ]
})
export class MainModule { }
