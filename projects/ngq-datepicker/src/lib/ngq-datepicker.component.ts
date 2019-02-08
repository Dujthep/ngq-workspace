import { AfterViewInit, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import 'bootstrap-datepicker';

export const BASE_OPTION = {
  autoclose: true,
  format: 'dd/mm/yyyy',
  language: 'en-GB'
} as DatepickerOptions;
export const th_TH = { ...BASE_OPTION, language: 'th-TH' } as DatepickerOptions;
export const en_GB = { ...BASE_OPTION, language: 'en-GB' } as DatepickerOptions;

const NGQ_DATETIME_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgqDatepickerComponent),
  multi: true
};

@Component({
  selector: 'ngq-datepicker',
  template: `
  <div *ngIf="!hideIcon" class="input-group">
    <input #input type="text" [attr.class]="class" [attr.id]="id" [attr.placeholder]="placeholder" (change)="onChange($event.target.value)">
    <div class="input-group-addon" (click)="_jQueryElement.datepicker('show')">
      <span class="glyphicon glyphicon-calendar"></span>
    </div>
  </div>

  <input *ngIf="hideIcon" #input type="text" [attr.class]="class" [attr.id]="id" [attr.placeholder]="placeholder" (change)="onChange($event.target.value)">
  `,
  styles: [],
  providers: [NGQ_DATETIME_VALUE_ACCESSOR]
})
export class NgqDatepickerComponent implements ControlValueAccessor, AfterViewInit {

  @Input() hideIcon: false;
  @Input() id: string;
  @Input() class: string;
  @Input() placeholder: string;

  @ViewChild('input') input;

  _jQueryElement: JQuery;
  _value: number;
  _isDisabled: boolean;
  _opts: DatepickerOptions;

  propagateChange = _ => { };

  constructor() { }

  @Input('opts')
  set opts(opts: DatepickerOptions) {
    this._opts = opts;
    if (this._jQueryElement) {
      this._jQueryElement.datepicker('destroy');
      const newVal = !!this._value
        ? new Intl.DateTimeFormat(this._opts.language).format(this._value)
        : '';
      this._jQueryElement.val(newVal);
      this.initDatepicker();
    }
  }

  ngAfterViewInit(): void {
    this._jQueryElement = jQuery(this.input.nativeElement);
    this.initDatepicker();
  }

  private initDatepicker() {
    this._opts = this._opts ? this._opts : th_TH;
    this._jQueryElement.datepicker(this._opts);
    this._jQueryElement.datepicker().on('changeDate', (e: any) => {
      this._value = e.date;
      this.propagateChange(this._value);
    });

    this._jQueryElement.datepicker('update', this._value);
    this._jQueryElement.prop('disabled', this._isDisabled);
  }

  writeValue(obj: any): void {
    this._value = obj;
    if (this._jQueryElement) {
      this._jQueryElement.datepicker('update', this._value);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
    if (this._jQueryElement) {
      this._jQueryElement.prop('disabled', this._isDisabled);
    }
  }

  onChange(value: string) {
    if (!value) {
      this._value = null;
      this.propagateChange(this._value);
    } else {
      if (this._jQueryElement) {
        this._jQueryElement.datepicker('destroy');
        this.initDatepicker();
      }
    }
  }

}
