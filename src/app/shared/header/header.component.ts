import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService }           from "../../login/services/auth.service";
import { StorageManagerService } from "../services/storage-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService, StorageManagerService]
})
export class HeaderComponent implements OnInit {

  active = false;

  constructor(private router: Router, private authService: AuthService, private storageManagerService: StorageManagerService) { }

  ngOnInit() { }

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

}
