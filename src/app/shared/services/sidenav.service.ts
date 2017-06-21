import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SidenavService {

  // Observable boolean sources
  private statusSidenav = new Subject<void>();

  // Observable string streams
  status$ = this.statusSidenav.asObservable();

  // Service status commands
  changeStatus() {
    this.statusSidenav.next();
  }

}
