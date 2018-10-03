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
  options = ['is_visited', 'is_wanted'];
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

  changeColor(value, capital) {
      capital.is_visited = false;
      capital.is_wanted = false;
      if (value !== 'select') {
        capital[value] = true;
      }
      console.log(value, capital);
    }


  constructor(private dataService: DataService,
              private modalService: BsModalService,
              public dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataService.getCapitals()
      .subscribe((capitals: any[]) => {
        this.capitals$ = capitals.map(el => {
          el.is_visited = false;
          el.is_wanted = false;
          return el;
        });
        this.dataStorageService.setData('capitals', JSON.stringify(capitals));
      });
  }
}
