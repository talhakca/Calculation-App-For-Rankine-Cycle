import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserStorageManagementService {
  constructor() {}

  setLocalStorageItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getLocalStorageItem(key: string): string {
    return localStorage.getItem(key) || null;
  }

  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
  }
}
