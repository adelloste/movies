import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AccountManagerService } from "../shared/services/account-manager.service";
import { AuthService }           from "./services/auth.service";

import { User } from "../shared/models/user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  private userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private accountManagerService: AccountManagerService, public authService: AuthService) {
    this.createForm();
  }

  ngOnInit() { }

  createForm(): void {
    this.userForm = this.fb.group({
      email: ['', Validators.compose([Validators.required,  Validators.pattern(/\S+@\S+\.\S+/)]) ],
      password: ['', Validators.compose([Validators.required,  Validators.minLength(8)]) ],
    });
  }

  signIn(): void {
    let user = new User(this.userForm.value.email, this.userForm.value.password);

    this.authService.signin(user).then((data) => {
      // Mi salvo che l'utente è loggato
      this.accountManagerService.setIsLoggedIn(true);
      // Redirect nella dashboard
      this.router.navigate(['/main/movies']);
    })
    .catch((error) => {
      console.log(error);
    });
  }  

}
