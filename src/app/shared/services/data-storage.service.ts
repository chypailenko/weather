import { Injectable } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  // setUser(user): void {
  //   localStorage.user = JSON.stringify(user);
  // }
  //
  // getUser() {
  //   return JSON.parse(localStorage.user);
  // }
  //
  // removeDataFromLocalStorage() {
  //   localStorage.clear();
  // }

  constructor(protected localStorage: LocalStorage) { }
}
