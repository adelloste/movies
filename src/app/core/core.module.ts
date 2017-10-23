import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';

import { LoaderManagerService }  from './services/loader-manager.service';
import { StorageManagerService } from './services/storage-manager.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    LoaderManagerService,
    StorageManagerService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        LoaderManagerService,
        StorageManagerService
      ]
    };
  }
}
