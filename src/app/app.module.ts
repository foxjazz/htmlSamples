import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import {FormsModule} from '@angular/forms';
import { TextinputComponent } from './textinput/textinput.component';
import { DatesampleComponent } from './datesample/datesample.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,

    ComponentInteractionComponent,

    TextinputComponent,

    DatesampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
