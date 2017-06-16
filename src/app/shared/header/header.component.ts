import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AccountManagerService } from "../services/account-manager.service";
import { AuthService }           from "../../login/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {

  active = false;

  constructor(private router: Router, private accountManagerService: AccountManagerService, public authService: AuthService) { }

  ngOnInit() { }

  sidenav() {
    this.active = ! this.active;
  }

  logout() {
    this.authService.signout().then((data) => {
      this.accountManagerService.setIsLoggedIn(false);
      this.router.navigate(['/login']); 
    })
    .catch((error) => {
      console.log(error);
    });
  }

}
