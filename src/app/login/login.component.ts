import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit(): void {}
  username: string | undefined;
  password: string | undefined;


  onClick() {
    if (this.username === 'Rjjalosjos' && this.password === 'password123') {
      this.router.navigateByUrl('/dashboard');
      this.customerService.username = this.username
    }
    else {
      this.router.navigateByUrl('/error');
    }
  }


}

  