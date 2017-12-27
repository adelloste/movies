import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd }        from '@angular/router'; 
import { Subscription }                 from 'rxjs/Rx';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  routerSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.scrollTop();
  }

  // Changing route doesn't scroll to top in the new page (see https://github.com/angular/angular/issues/7791)
  scrollTop() {
    this.routerSubscription = this.router.events
        .filter(event => event instanceof NavigationEnd)
        .subscribe(event => { window.scrollTo(0, 0); });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}

