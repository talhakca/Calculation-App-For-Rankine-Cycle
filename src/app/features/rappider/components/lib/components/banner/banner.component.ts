import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { ImageComponentConfig } from '../../utils/image';

@Component({
  selector: 'rappider-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class RappiderBannerComponent implements OnInit, OnChanges {

  /* text */
  @Input() text: string;
  @Input() button: ButtonComponentConfig;
  @Input() backgroundImage: ImageComponentConfig;

  url: string;

  ngOnInit(): void {
    this.setUrlForBackgroundImage();
  }

  ngOnChanges(): void {
    this.setUrlForBackgroundImage();
  }

  setUrlForBackgroundImage() {
    this.url = `url(${this.backgroundImage?.source})`;
  }
}
