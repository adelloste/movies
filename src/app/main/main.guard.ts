import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StorageManagerService } from "../shared/services/storage-manager.service";

@Injectable()
export class MainGuard implements CanActivate {

  constructor(private storageManagerService: StorageManagerService, private router: Router) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    // Check if the user is present
    if(this.storageManagerService.get("user")) { return true; }

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}