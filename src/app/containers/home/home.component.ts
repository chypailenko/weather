import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../shared/services/data.service';
import {Capital, Coordinate, Weather} from '../../shared/models';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  @Output() click: EventEmitter<any> = new EventEmitter();

  public capitals$: Observable<Capital[]>;
  public weatherOfCapital$: Observable<Weather[]>;

   public getWeather(capital: Capital) {
      this.weatherOfCapital$ = this.dataService.getWeather(capital);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
  cancel() {
    console.log('cancel');
  }


  constructor(private dataService: DataService,
              private modalService: BsModalService,
              protected localStorage: LocalStorage) { }

  ngOnInit() {

    this.capitals$ = this.dataService.getCapitals();
    this.capitals$.subscribe((data: any) => {
       localStorage.setItem('capitals', JSON.stringify(data));
    });
}}
