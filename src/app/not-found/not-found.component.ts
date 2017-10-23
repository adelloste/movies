import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { LoaderManagerService }   from '../core/services/loader-manager.service';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router, private loaderManagerService: LoaderManagerService) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
  }

  goBack() {
    // Redirect to login
    this.router.navigate(['/login']);
  }

}
