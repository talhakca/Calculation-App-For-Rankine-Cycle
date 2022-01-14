import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ADVANCED_RICH_TEXT_EDITOR_SETTINGS } from '../../utils/rich-text-editor/advanced-rich-text-editor-settings.variable';
import { MENTION_DENOTATION_CHARS } from '../../utils/rich-text-editor/mention-settings.variables';
import { MENTION_ALLOWED_CHARS } from '../../utils/rich-text-editor/regex.variables';
import { RichTextEditorTheme } from '../../utils/rich-text-editor/rich-text-editor-theme.enum';
import { RichTextEditorType } from '../../utils/rich-text-editor/rict-text-editor-type.enum';
import { SIMPLE_RICH_TEXT_EDITOR_SETTINGS } from '../../utils/rich-text-editor/simple-rich-text-editor-settings.variable copy';


@Component({
  selector: 'rappider-rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderRichTextEditorComponent)
    }
  ]
})
export class RappiderRichTextEditorComponent implements OnInit, ControlValueAccessor {

  @Input() editorType: RichTextEditorType;
  @Input() theme: RichTextEditorTheme;
  @Input() placeholder: string;
  @Input() cssStyle: { [key: string]: any };
  @Input() cssClass: string;
  @Input() mentionSupported = false;
  @Input() mentionValues: string[];

  @Output() blur = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  _value: string;

  get value() {
    return this._value;
  }

  set value(value: string) {
    console.log(value);
    this._value = value;
    this.onChange(value);
    this.onTouched();
    this.valueChange.emit(value);
  }

  RichTextEditorTheme = RichTextEditorTheme;

  /* supported toolbar settings */
  modules: { toolbar?: Array<any>; mention?: any };

  onChange: any = () => {
    /* TODO: code here */
  };

  onTouched: any = () => {
    /* TODO: code here */
  };


  ngOnInit(): void {
    this.setEditorSettings();
    if (this.mentionSupported && this.mentionValues) {
      this.pushMentionModule();
    }
  }

  /**
   * If mentionSupported is true then send mention to module
   *
   * @memberof RappiderRichTextEditorComponent
   */
  pushMentionModule() {
    const availableDatas = this.mentionValues.map(mentionValue => ({ value: mentionValue }));
    this.modules.mention = {
      allowedChars: MENTION_ALLOWED_CHARS,
      mentionDenotationChars: MENTION_DENOTATION_CHARS,
      source: function (searchTerm, renderItem, mentionChar) {
        let values;
        if (MENTION_DENOTATION_CHARS.includes(mentionChar)) {
          values = availableDatas;
        }
        if (searchTerm.length === 0) {
          renderItem(values, searchTerm);
        } else {
          const matches = values.filter(value =>
            ~value.value.toLowerCase().indexOf(searchTerm.toLowerCase())
          );
          renderItem(matches, searchTerm);
        }
      }
    };
  }

  setEditorSettings() {
    switch (this.editorType) {
      case RichTextEditorType.Simple:
        this.modules = SIMPLE_RICH_TEXT_EDITOR_SETTINGS;
        break;
      case RichTextEditorType.Advanced:
        this.modules = ADVANCED_RICH_TEXT_EDITOR_SETTINGS;
        break;
      default:
        this.modules = SIMPLE_RICH_TEXT_EDITOR_SETTINGS;
        break;
    }
  }

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur() {
    this.blur.emit(this.value);
  }

}
