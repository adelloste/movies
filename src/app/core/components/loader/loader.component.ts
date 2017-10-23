import { Component, OnInit } from '@angular/core';
import { Subscription }      from 'rxjs/Subscription';

import { LoaderManagerService } from '../../services/loader-manager.service';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  active: boolean = true;
  subscription: Subscription;

  constructor(private loaderManagerService: LoaderManagerService) {
    this.subscription = loaderManagerService.status$.subscribe(data => { this.manager(data); });
  }

  ngOnInit() {
  }

  // Show/Hide loader
  manager(value) {
    this.active = value;
  }

}
