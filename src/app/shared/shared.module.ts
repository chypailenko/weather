import {NgModule} from '@angular/core';
import {BtnComponent} from './btn/btn.component';

@NgModule ({
  declarations: [
    BtnComponent
  ],
  exports: [
    BtnComponent
  ]
})
export class SharedModule {}
