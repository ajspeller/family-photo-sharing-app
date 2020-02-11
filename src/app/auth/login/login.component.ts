import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fpa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService
      .login('dkjda@snowcone.com', '123456')
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
