import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {
  // TODO(review): кнопку так і не реалізувала
  // @Output() click: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // onClick() {
  //   console.log('click');
  // }
}
