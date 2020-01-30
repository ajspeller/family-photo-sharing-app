import { Component, OnDestroy } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'fpa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  navBarOpen = true;
  routes = [
    { path: '/', title: 'Home', icon: 'home' },
    { path: '/albums', title: 'Albums', icon: 'folder' },
    { path: '/users', title: 'User', icon: 'person' }
  ];
  watcher: Subscription;

  constructor(mediaObserver: MediaObserver) {
    this.watcher = mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change: MediaChange) => {
        if (change.mqAlias === 'xs') {
          this.loadMobileContent();
        } else {
          this.loadDashboardContent();
        }
      });
  }

  loadDashboardContent() {
    console.log('large view');
    // Do something special since the viewport is currently
    // using large display sizes
  }

  loadMobileContent() {
    console.log('small view');
    // Do something special since the viewport is currently
    // using mobile display sizes
  }

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
