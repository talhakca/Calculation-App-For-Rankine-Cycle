import { Component, Input } from '@angular/core';

@Component({
  selector: 'rappider-input-error',
  templateUrl: './input-error.component.html',
  styleUrls: ['./input-error.component.scss']
})
export class RappiderInputErrorComponent {

  @Input() errors: string[];

}
