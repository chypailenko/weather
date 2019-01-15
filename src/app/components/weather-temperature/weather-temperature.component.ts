import {Component, Input, OnInit} from '@angular/core';
import * as R from 'ramda';
import {Weather} from '../../shared/models';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss']
})
export class WeatherTemperatureComponent implements OnInit {
  @Input() data: Weather[];

  get temperature(): number {
    return R.path(['currently', 'temperature'], this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
