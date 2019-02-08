import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgqDatepickerModule } from 'ngq-datepicker';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgqDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
