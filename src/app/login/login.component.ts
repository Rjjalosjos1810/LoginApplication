import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {}
  username: string | undefined;
  password: string | undefined;

  constructor(private router: Router) {}

  onClick() {
    if (this.username === 'Rjjalosjos' && this.password === 'password123') {
      this.router.navigateByUrl('/dashboard');
      console.log('You are now logged in!');
    }
    else {
      this.router.navigateByUrl('/error');
    }
  }


}

  