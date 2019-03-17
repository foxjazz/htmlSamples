import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {InputsComponent} from './inputs/inputs.component';
import {ComponentInteractionComponent} from './component-interaction/component-interaction.component';

const routes: Routes = [{path: 'inputs', component: InputsComponent},
  {path: 'interaction', component: ComponentInteractionComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
