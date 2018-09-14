import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCapitals() {
    return this.http.get(
      'https://gist.githubusercontent.com/jpriebe/d62a45e29f24e843c974/raw/b1d3066d245e742018bce56e41788ac7afa60e29/us_state_capitals.json'
    );
  }

  getWeather() {
    return this.http.get('https://api.darksky.net/forecast/73b864c657473b7ce57d7471f599a2b9/${capital.lat},${capital.long}');
  }

  // const getWeather = async(obj) => {
  //
  //   const capitals = Object.values(obj);
  //
  //   for(const capital of capitals) {
  //     let weatherPromise = await fetch(`https://api.darksky.net/forecast/73b864c657473b7ce57d7471f599a2b9/${capital.lat},${capital.long}`);
  //     let capitalWeather = await weatherPromise.json();
  //     capital.weather = capitalWeather;
  //   }
  //
  //   console.log(capitals);
  // }
}
