import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MenuItem } from 'primeng/api';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { SocialList } from '../customer';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [FormBuilder]
})


export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  values1: string | undefined;
  values2: string | undefined;
  values3: string | undefined;
  customers!: Customer[];
  customer!: Customer;
  username!: string;


  social = [
    { name: 'Facebook' },
    { name: 'Twitter' },
    { name: 'Instagram' },
    { name: 'Linkedin' },
  ];

  socialsNG!: SocialList;

  displayInsert!: boolean;
  displayUpdate!: boolean;
  goodbye!: boolean;
  displayDialog!: boolean;

  first = 0;

  rows = 10;

  profileForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    country: ['', Validators.required],
    nationality: ['', Validators.required],
    company: ['', Validators.required],
    designation: ['', Validators.required],
    workexperience: ['', Validators.required],

  });

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder, private router: Router, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => (this.customers = customers));
    this.username = this.customerService.username;

    this.items = [
      { label: 'Titus GT', icon: 'pi pi-fw pi-prime' },
      {
        label: 'Insert Page', icon: 'pi pi-fw pi-user-plus', command: () => {
          this.displayInsert = true;
        }
      },
      { label: 'Update Page', icon: 'pi pi-fw pi-user-edit', command: () => {
          this.showDialog();
        } 
      },
      {
        label: 'Quit', icon: 'pi pi-fw pi-sign-out', command: () => {
          this.confirm();
        } 
      },
    ];
    

  }

  public addRecord(): void {

    this.customer = {
      firstname: <string>this.profileForm.get('firstname')?.value,
      lastname: <string>this.profileForm.get('lastname')?.value,
      country: <string>this.profileForm.get('country')?.value,
      nationality: <string>this.profileForm.get('company')?.value,
      company: <string>this.profileForm.get('company')?.value,
      designation: <string>this.profileForm.get('designation')?.value,
      workexperience: parseInt(<string>this.profileForm.get('workexperience')?.value),
      cv: "",
      datasource: this.socialsNG
    }

    console.log(this.customer);

    this.customers.push(this.customer);


  }

  showDialog() {
    this.displayDialog = true;
  }

  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
           this.router.navigateByUrl('/login')
        }
    });
}

  public reset():void {
    this.profileForm.reset()
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  updateUser(lastname: String) {
    this.displayUpdate = true;
    const user = this.customers.find(u => u.lastname === lastname);

    if (user) {
      this.customer = user;
      
    }
    
  }

  close() {
    this.displayUpdate = false;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === (this.customers.length - this.rows) : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }




}
