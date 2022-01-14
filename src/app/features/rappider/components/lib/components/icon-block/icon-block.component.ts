import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';
import { IconBlockMode } from '../../utils/icon-block/icon-block-mode.enum';

@Component({
  selector: 'rappider-icon-block',
  templateUrl: './icon-block.component.html',
  styleUrls: ['./icon-block.component.scss']
})
export class RappiderIconBlockComponent implements OnInit, OnChanges {

  /* avatar */
  @Input() avatar: AvatarComponentConfig;
  /* title */
  @Input() title: string;
  /* content */
  @Input() content: string;
  /* mode */
  @Input() mode: IconBlockMode;

  IconBlockModes = IconBlockMode;

  ngOnInit(): void {
    this.initDefaults();
  }

  ngOnChanges(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (!this.mode) {
      this.mode = IconBlockMode.Mode1;
    }
  }

}
