import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { InitApp } from 'src/app/features/data-stores/app-data-store/state/app-data-store.actions';
import { Logout } from './features/data-stores/auth-data-store/state/auth-data-store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  subscriptions: Subscription[];
  user: any;

  constructor(private store: Store<any>, private router: Router) { }

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
        this.user = user;
      } else {
        this.user = null;
      }
    })
  }

  onClickBrand() {
    if (this.user) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/auth']);
    }
  }

  onClickNavbarButton(key: string) {
    switch (key) {
      case 'login':
        this.router.navigate(['/auth/login']);
      case 'register':
        this.router.navigate(['/auth/register']);
      case 'projects':
        this.router.navigate(['/home']);
      case 'logout':
        this.store.dispatch(Logout());
      default:
        break;
    }
  }

}
