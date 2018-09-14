import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() click: EventEmitter<any> = new EventEmitter();

  capitals$: any;
  capitalsArray: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapitals().subscribe(
      data => this.capitals$ = data
    );

    this.getWeather(this.capitals$);
  }


   async getWeather(obj) {
      console.log(obj);

    this.capitalsArray = Object.values(obj);

    for (const capital of this.capitalsArray) {
      const weatherPromise = await fetch(
        `https://api.darksky.net/forecast/73b864c657473b7ce57d7471f599a2b9/${capital.lat},${capital.long}`);
        capital.weather = await weatherPromise.json();
    }
    console.log(this.capitalsArray);
  }

  add() {
    console.log('add');
  }
  delete() {
    console.log('delete');
  }
  edit() {
    console.log('edit');
  }

}
