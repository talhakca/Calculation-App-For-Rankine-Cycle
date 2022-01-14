import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { CodeMirrorSettings, CODEMIRROR_JSON_SETTINGS } from '../../utils/codemirror';

@Component({
  selector: 'rappider-codemirror-input-form',
  templateUrl: './codemirror-input-form.component.html',
  styleUrls: ['./codemirror-input-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RappiderCodemirrorInputFormComponent implements OnInit {
  @Input() codemirrorTitle: string;
  /* button config input */
  @Input() button: ButtonComponentConfig;
  /* codemirror settings */
  @Input() codemirrorSettings: CodeMirrorSettings = CODEMIRROR_JSON_SETTINGS;
  /* any content written in codemirror component */
  @Input() codemirrorContent: string;

  @Output() buttonClick = new EventEmitter<string>();

  ngOnInit(): void {
    this.setDefaultButton();
  }

  /**
   * set default button if there is no button input
   *
   * @memberof RappiderCodemirrorInputFormComponent
   */
  setDefaultButton() {
    if (!this.button) {
      // this.button = PRIMARY_SAVE_BUTTON_CONFIG;
    }
  }

  /**
   * emits codemirror's content when the button is clicked
   *
   * @memberof RappiderCodemirrorInputFormComponent
   */
  onButtonClick() {
    this.buttonClick.emit(this.codemirrorContent);
  }

}
