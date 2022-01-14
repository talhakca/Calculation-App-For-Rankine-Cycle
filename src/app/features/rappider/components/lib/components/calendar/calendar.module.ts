import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCalendarComponent } from './calendar.component';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    RappiderCalendarComponent
  ],
  imports: [
    CommonModule,
    NzCalendarModule,
    FormsModule,
    NzAlertModule,
    NzCardModule,
    TranslateModule
  ],
  exports: [
    RappiderCalendarComponent
  ]
})
export class RappiderCalendarModule { }

