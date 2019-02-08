import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgqDatepickerComponent } from './ngq-datepicker.component';

@NgModule({
  declarations: [NgqDatepickerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgqDatepickerComponent]
})
export class NgqDatepickerModule { }
