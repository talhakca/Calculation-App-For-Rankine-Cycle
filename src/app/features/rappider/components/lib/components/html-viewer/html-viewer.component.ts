import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ADVANCED_RICH_TEXT_EDITOR_SETTINGS } from '../../utils/rich-text-editor/advanced-rich-text-editor-settings.variable';
import { RichTextEditorTheme } from '../../utils/rich-text-editor/rich-text-editor-theme.enum';

@Component({
  selector: 'rappider-html-viewer',
  templateUrl: './html-viewer.component.html',
  styleUrls: ['./html-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RappiderHtmlViewerComponent {

  @Input() html: string;

  RichTextEditorTheme = RichTextEditorTheme;

  ADVANCED_RICH_TEXT_EDITOR_SETTINGS = ADVANCED_RICH_TEXT_EDITOR_SETTINGS;

}
