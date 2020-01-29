import { Component } from '@angular/core';

@Component({
  selector: 'fpa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navBarOpen = true;
  routes = [
    { path: '/', title: 'Home', icon: 'home' },
    { path: '/albums', title: 'Albums', icon: 'folder' },
    { path: '/users', title: 'User', icon: 'person' }
  ];

  toggleNav() {
    this.navBarOpen = !this.navBarOpen;
  }
}
