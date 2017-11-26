import { Component, OnDestroy } from '@angular/core';
import { Router }               from '@angular/router';
import { Subscription }         from 'rxjs/Subscription';

import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  
  private active: boolean = false;
  private subscription: Subscription;

  constructor(private sidenavService: SidenavService) {
    this.subscription = sidenavService.status$.subscribe(data => { this.sidenav(); });
  }

  sidenav() {
    this.active = ! this.active;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
