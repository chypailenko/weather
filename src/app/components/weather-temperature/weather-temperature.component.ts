import {Component, Input, OnInit} from '@angular/core';
import * as R from 'ramda';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss']
})
export class WeatherTemperatureComponent implements OnInit {
  // TODO(Polina): create weather model {currently: {temperature: number}
  @Input() data: any;

  get temperature(): number {
    return R.path(['currently', 'temperature'], this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
