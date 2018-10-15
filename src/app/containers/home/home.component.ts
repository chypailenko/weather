import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {fromEvent, Observable, Subject} from 'rxjs';
import {DataService} from '../../shared/services/data.service';
import {Capital, Coordinate, Mark, Weather} from '../../shared/models';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {DataStorageService} from '../../shared/services/data-storage.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,  OnDestroy {
  options = ['visit', 'want'];
  modalRef: BsModalRef;
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Output() click: EventEmitter<any> = new EventEmitter();

  public capitals$: Observable<Capital[]> = this.dataService.getCapitals();
  public capitals: Capital[];

  public weatherOfCapital$: Observable<Weather[]>;

   public getWeather(capital: Capital) {
      this.weatherOfCapital$ = this.dataService.getWeather(capital);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  delete(item) {
    console.log('delete');
    console.log(item);
    const tempItem = item;
  }

  addCity(value: string) {
    const newCapital = new Capital().create({capital: value});
    this.capitals.push(newCapital);
    this.dataStorageService.setData('capitals', this.capitals);
  }

  getItemByKey(value: string, key: string, data: any[]): any {
    const [res] = data.filter((item) => item[key].toLocaleLowerCase() === value.toLocaleLowerCase());
    return res;
  }

  changeColor(value: Mark, capital: Capital) {
    capital.mark = value;
    this.dataStorageService.setData('capitals', this.capitals);
    }


  constructor(private dataService: DataService,
              private modalService: BsModalService,
              public dataStorageService: DataStorageService) { }


  ngOnInit() {
    this.capitals$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((capitals: Capital[]) => {
      this.capitals = capitals;
      this.dataStorageService.setData('capitals', capitals);
    });
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.unsubscribe();
}

}
