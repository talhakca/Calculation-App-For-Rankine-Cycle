import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderRowFormComponent } from './row-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { RappiderInputErrorModule } from '../input-error/input-error.module';


@NgModule({
  declarations: [
    RappiderRowFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    DragDropModule,
    NzInputModule,
    NzButtonModule,
    RappiderInputErrorModule
  ],
  exports: [
    RappiderRowFormComponent
  ]
})
export class RappiderRowFormModule { }
