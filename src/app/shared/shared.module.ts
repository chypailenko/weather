import {NgModule} from '@angular/core';
import {BtnComponent} from './btn/btn.component';
import { PopupComponent } from './popup/popup.component';


@NgModule ({
  declarations: [
    BtnComponent,
    PopupComponent
  ],
  imports: [
  ],
  exports: [
    BtnComponent
  ]
})
export class SharedModule {}
