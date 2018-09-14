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
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCapitals().subscribe(
      data => this.capitals$ = data
    );
  }

   getWeather = async(obj) => {

    this.capitals$ = Object.values(obj);

    console.log(this.capitals$);

    for (const capital of this.capitals$) {
      const weatherPromise = await fetch(
        `https://api.darksky.net/forecast/73b864c657473b7ce57d7471f599a2b9/${capital.lat},${capital.long}`);
      const capitalWeather = await weatherPromise.json();
      capital.weather = capitalWeather;
    }
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
