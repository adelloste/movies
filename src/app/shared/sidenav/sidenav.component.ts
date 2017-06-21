import { Component, OnDestroy } from '@angular/core';
import { Router }               from '@angular/router';
import { Subscription }         from 'rxjs/Subscription';

import { AuthService }           from "../../login/services/auth.service";
import { StorageManagerService } from "../services/storage-manager.service";
import { SidenavService }        from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  
  private active: boolean = false;
  private subscription: Subscription;

  constructor(private router: Router, private authService: AuthService, private storageManagerService: StorageManagerService, private sidenavService: SidenavService) {
    this.subscription = sidenavService.status$.subscribe(data => { this.sidenav(); });
  }

  sidenav() {
    this.active = ! this.active;
  }

  logout() {
    // Signout with Firebase
    this.authService.signout().then((data) => {
      // Delete user from storage
      this.storageManagerService.delete("user");
      // Redirect to login
      this.router.navigate(['/login']); 
    })
    .catch((error) => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
