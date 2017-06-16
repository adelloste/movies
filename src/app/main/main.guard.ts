import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AccountManagerService } from "../shared/services/account-manager.service";

@Injectable()
export class MainGuard implements CanActivate {

  constructor(private accountManagerService: AccountManagerService, private router: Router) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.accountManagerService.getIsLoggedIn()) { return true; }

    // Store the attempted URL for redirecting
    this.accountManagerService.setRedirectUrl(state.url);

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}