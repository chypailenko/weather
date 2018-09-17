import {NgModule} from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {PopupComponent} from './shared/popup/popup.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'popup', component: PopupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
