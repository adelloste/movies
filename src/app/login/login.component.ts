import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { StorageManagerService } from "../shared/services/storage-manager.service";
import { AuthService }           from "./services/auth.service";
import { LoaderManagerService } from '../core/services/loader-manager.service';

import { environment } from "../../environments/environment";
import { User }        from "../shared/models/user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, StorageManagerService]
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  showMsg: boolean;
  msg: string;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    public authService: AuthService, 
    private storageManagerService: StorageManagerService, 
    private loaderManagerService: LoaderManagerService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
  }

  createForm(): void {
    this.userForm = this.fb.group({
      email: [
        environment.production ? '' : 'account@gmail.com',
        Validators.compose([Validators.required,  Validators.pattern(/\S+@\S+\.\S+/)])
      ],
      password: [
        environment.production ? '' : '123456789!',
        Validators.compose([Validators.required,  Validators.minLength(8)])
      ],
    });
  }

  signIn(): void {
    // Show loader
    this.loaderManagerService.changeStatus(true);
    // Create user
    let user = new User(this.userForm.value.email, this.userForm.value.password);

    // Signin with Firebase
    this.authService.signin(user).then((data) => {
      // Save user in storage
      this.storageManagerService.store("user", {email: user.getEmail, signin: true});
      // Redirect to dashboard
      this.router.navigate(['/main/movies']);
    })
    .catch((error) => {
      // hide loader
      this.loaderManagerService.changeStatus(false);
      // Bracket notation (see https://github.com/angular/angularfire2/issues/666)
      this.msg = error['message'];
      this.showMsg = true;
    });
  }  

}
