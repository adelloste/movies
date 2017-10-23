import { Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import * as CryptoJS           from 'crypto-js';

@Injectable()
export class StorageManagerService {

  constructor(private localStorageService: LocalStorageService) { }

  // Store encrypted data in localstorage
  store(key: string, value: any): void {
    let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(value), "Secret Passphrase").toString();
    this.localStorageService.set(key, encryptedData);
  }

  // Get encrypted data from localstorage
  get(key: string): any {
    let encryptedData = this.localStorageService.get(key);
    
    if (encryptedData)
        return JSON.parse(CryptoJS.AES.decrypt(encryptedData.toString(), "Secret Passphrase").toString(CryptoJS.enc.Utf8));

    return null;
  }

  // Delete encrypted data in localstorage
  delete(key: string): void {
    this.localStorageService.remove(key);
  }
  
}

