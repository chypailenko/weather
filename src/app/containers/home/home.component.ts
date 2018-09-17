import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../shared/services/data.service';
import {Capital, Coordinate, Weather} from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() click: EventEmitter<any> = new EventEmitter();

  public capitals$: Observable<Capital[]>;
  public weatherOfCapital$: Observable<Weather[]>;

   public getWeather(capital: Capital) {
      this.weatherOfCapital$ = this.dataService.getWeather(capital);
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


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.capitals$ = this.dataService.getCapitals();
  }

}
