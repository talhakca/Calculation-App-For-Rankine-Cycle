import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHtmlEditorComponent } from './html-editor.component';
import { FormsModule } from '@angular/forms';
import { RappiderModalModule } from '../modal/modal.module';
import { RappiderCodemirrorModule } from '../codemirror/codemirror.module';
import { RappiderRichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';


@NgModule({
  declarations: [
    RappiderHtmlEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RappiderModalModule,
    RappiderCodemirrorModule,
    RappiderRichTextEditorModule
  ],
  exports: [
    RappiderHtmlEditorComponent
  ]
})
export class RappiderHtmlEditorModule { }
