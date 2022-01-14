import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { IconType } from '../../utils/icon/icon-type.enum';
import { NgZorroIconTheme } from '../../utils/icon/ng-zorro-icon-theme.enum';

@Component({
  selector: 'rappider-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RappiderIconComponent implements OnInit, OnChanges {

  /* icon name */
  @Input() name: string;
  /* icon library */
  @Input() type: IconType;
  /* theme for selected icon library */
  @Input() theme: NgZorroIconTheme;
  /* icon color */
  @Input() color: string;

  IconType = IconType;


  ngOnInit(): void {
    this.initDefault();
  }

  ngOnChanges(): void {
    this.initDefault();
  }

  initDefault() {
    if (!this.type) {
      this.type = IconType.FontAwesome;
    }
  }

}
