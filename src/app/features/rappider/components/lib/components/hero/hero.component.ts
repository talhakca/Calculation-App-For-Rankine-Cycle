import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, OnChanges } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';

@Component({
  selector: 'rappider-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class RappiderHeroComponent implements OnInit, OnChanges {

  /* image url for background */
  @Input() backgroundImageUrl: string;
  /* line's background color class */
  @Input() lineBackgroundColor: string;
  /* line's width */
  @Input() lineWidth = '50px';
  /* hero's content can take inner html */
  @Input() content: string;
  /* hero's title can take inner html */
  @Input() title: string;
  /* hero's button */
  @Input() button: ButtonComponentConfig;

  /* button click trigger */
  @Output() buttonClick = new EventEmitter();

  url: string;


  ngOnInit(): void {
    this.setUrlForBackgroundImage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.backgroundImageUrl) {
      this.setUrlForBackgroundImage();
    }
  }

  setUrlForBackgroundImage() {
    this.url = `url(${this.backgroundImageUrl})`;
  }

  onButtonClick() {
    this.buttonClick.emit();
  }

}

