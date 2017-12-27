import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InfoComponent } from './info.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '',
        component: InfoComponent
      }
    ])
  ],
  declarations: []
})
export class InfoRoutingModule { }
