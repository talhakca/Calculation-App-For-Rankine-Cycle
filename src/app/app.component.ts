import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SEN4992';

  subscriptions: Subscription[];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions = [
      this.subscribeToUser()
    ]
  }

  subscribeToUser() {
    return this.store.select(state => state.auth.user).subscribe(user => {
      if (user) {
        console.log('hi');
        this.store.dispatch(InitApp());
      }
    })
  }
}
