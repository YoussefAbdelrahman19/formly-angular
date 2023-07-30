  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private localStorageKey = 'user_data';
    constructor() {}
    getUserData(): any {
      const data = localStorage.getItem(this.localStorageKey);
      return data ? JSON.parse(data) : null;
    }

    saveUserData(data: any): void {
      localStorage.setItem(this.localStorageKey, JSON.stringify(data));
    }

    clearUserData(): void {
      localStorage.removeItem(this.localStorageKey);
    }
  }
