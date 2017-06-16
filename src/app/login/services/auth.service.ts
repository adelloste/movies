import { Injectable }      from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable }      from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from "../../shared/models/user";

import * as firebase from 'firebase/app';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  signin(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.getEmail, user.getPassword);
  }

  signout() {
    return this.afAuth.auth.signOut();
  }

}

