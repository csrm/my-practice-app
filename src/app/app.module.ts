import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessAlert } from './successAlert/successAlert.component'
import { WarningAlert } from './warningAlert/warningAlert.component'

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessAlert
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
