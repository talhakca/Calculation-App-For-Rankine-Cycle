import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'rappider-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class RappiderCountdownComponent implements OnInit {

  /* data to emit */
  @Input() data: any;
  @Input() deadline: string | number;
  @Input() title: string;
  @Input() format: string;
  @Input() prefix: string;

  @Output() complete = new EventEmitter();

  ngOnInit(): void {
    this.deadline = this.deadline ? Date.parse(this.deadline.toString()) : null;
  }

  onCountdownFinish() {
    this.complete.emit(this.data);
  }

}
