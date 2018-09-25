import {Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, TemplateRef, ViewChild} from '@angular/core';
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
  options = ['visited', 'want'];
  modalRef: BsModalRef;
  @Output() click: EventEmitter<any> = new EventEmitter();

  // public capitals$: Observable<Capital[]>;
  public capitals$: any[] = [];
  public weatherOfCapital$: Observable<Weather[]>;

   public getWeather(capital: Capital) {
      this.weatherOfCapital$ = this.dataService.getWeather(capital);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  delete() {
    console.log('delete');
    this.dataStorageService.removeItemFromLocalStorage('capitals');
  }
  edit() {
    console.log('edit');
  }
  add(value: any) {
     console.log(value);
     console.log(this.capitals$);
    this.capitals$.push(value);
  }
  addName() {
     console.log('click');
  }

  changeColor(value) {
    console.log(this.options);
    console.log(value);
      if (value === 'want') {
        document.getElementById('row').style.backgroundColor = '#F1FFC4';
      } else {
        document.getElementById('row').style.backgroundColor = '#FFCAAF';
      }
    this.dataStorageService.setData('status', value);
    }


  constructor(private dataService: DataService,
              private modalService: BsModalService,
              public dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataService.getCapitals()
      .subscribe((capitals: any[]) => {
        this.capitals$ = capitals;
        this.dataStorageService.setData('capitals', JSON.stringify(capitals));
      });
  }
}
