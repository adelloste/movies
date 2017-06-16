import { Injectable } from '@angular/core';

import { User } from "../models/user";

@Injectable()
export class AccountManagerService {

  private _isLoggedIn: boolean;
  private _redirectUrl: string;

  constructor() { }

  setIsLoggedIn(value: boolean): void {
    this._isLoggedIn = value;
  }

  getIsLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  setRedirectUrl(value: string): void {
    this._redirectUrl = value;
  }

  getRedirectUrl(): string {
    return this._redirectUrl;
  }

}
