import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoaderManagerService {

  // Observable boolean sources
  private statusSidenav = new Subject<void>();
  
  // Observable string streams
  status$ = this.statusSidenav.asObservable();

  // Service status commands
  changeStatus(value) {
    this.statusSidenav.next(value);
  }

}
