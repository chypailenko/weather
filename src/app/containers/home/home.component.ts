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
