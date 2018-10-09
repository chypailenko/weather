import { Injectable } from '@angular/core';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(protected localStorage: LocalStorage) { }

  setData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getData(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  removeDataFromLocalStorage() {
    localStorage.clear();
  }
  removeItemFromLocalStorage(value) {
    localStorage.removeItem(value);
  }
}
