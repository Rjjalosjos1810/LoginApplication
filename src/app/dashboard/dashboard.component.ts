import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';


interface social {
  name: string,
  code: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  values1: string | undefined;
  values2: string | undefined;
  values3: string | undefined;
  customers: Customer[] = [];

  socials: social[] = [];
  selectedSocials: social | undefined;

  //form related variables
  insertFormGroup!: FormGroup;
  firstname!: FormControl;
  lastname!: FormControl
  country!: FormControl;
  nationality!: FormControl;
  company!: FormControl;
  designation!: FormControl;
  workexperience!: FormControl;
  displayInsert!: boolean;

    first = 0;

    rows = 10;

    // profileForm = this.formBuilder.group( {
    //   firstname: ['', Validators.required],
    //   lastname: ['',  Validators.required],
    //   country: ['', Validators.required],
    //   nationality: ['', Validators.required],
    //   company: ['', Validators.required],
    //   designation: ['', Validators.required],
    // })
  
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => (this.customers = customers));

    this.items = [
      {label: 'Titus GT', icon: 'pi pi-fw pi-prime'},
      {label: 'Insert Page', icon: 'pi pi-fw pi-plus', command: () => {
        this.displayInsert = true;
      }},
      {label: 'Update Page', icon: 'pi pi-fw pi-pencil'},
      {label: 'Quit', icon: 'pi pi-fw pi-power-off'},    
    ];

    this.socials = [
      {name: 'Facebook', code: 'FB'},
      {name: 'Twitter', code: 'TWT'},
      {name: 'Instagram', code: 'IG'},
      {name: 'Linkedin', code: 'LKD'},    
    ];

 
    
  } 

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.customers ? this.first === (this.customers.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.customers ? this.first === 0 : true;
  }



  
}
