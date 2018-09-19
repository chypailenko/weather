import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Capital, Weather} from '../models';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {DataStorageService} from './data-storage.service';

const capitalObjToArray = (data: Object): Capital[] => Object.values(data);

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient,
              public dataStorageService: DataStorageService) { }

  public getCapitals(): Observable<Capital[]> {
    if (localStorage.getItem('capitals')) {
      return of(this.dataStorageService.getData('capitals'));
    } else {
      return this.http.get<Capital[]>(environment.capitalUrl).pipe(
        map(capitalObjToArray)
      );
    }
  }
  public getWeather(capital: Capital): Observable<Weather[]> {
    return this.http.get<Weather[]>(`${environment.weatherUrl}/${capital.lat},${capital.long}`);
  }
}
