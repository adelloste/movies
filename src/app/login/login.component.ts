import { Component, OnInit }                  from '@angular/core';
import { Router }                             from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { StorageManagerService } from "../shared/services/storage-manager.service";
import { AuthService }           from "./services/auth.service";

import { User } from "../shared/models/user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService, StorageManagerService]
})
export class LoginComponent implements OnInit {

  private userForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService, private storageManagerService: StorageManagerService) {
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

    // Signin with Firebase
    this.authService.signin(user).then((data) => {
      // Save user in storage
      this.storageManagerService.store("user", {email: user.getEmail, signin: true});
      // Redirect to dashboard
      this.router.navigate(['/main/movies']);
    })
    .catch((error) => {
      console.log(error);
    });
  }  

}
