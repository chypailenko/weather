import {Component, EventEmitter, OnInit, Output, TemplateRef} from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from '../../shared/services/data.service';
import {Capital, Coordinate, Weather} from '../../shared/models';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {DataStorageService} from '../../shared/services/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value = '';
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

  delete() {
    console.log('delete');
  }
  edit() {
    console.log('edit');
  }
  add(value: string) {
    // this.capitals$.push(value);
    console.log(this.capitals$);
  }


  constructor(private dataService: DataService,
              private modalService: BsModalService,
              public dataStorageService: DataStorageService) { }

  ngOnInit() {
    // this.dataService.getCapitals()
    //   .subscribe(capitals => {
    //     this.capitals$ = capitals;
    //     this.dataStorageService.setData('capitals', JSON.stringify(capitals));
    //   });
  }
}
