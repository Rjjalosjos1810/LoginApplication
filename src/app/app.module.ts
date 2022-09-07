import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import {SplitterModule} from 'primeng/splitter';
import {DividerModule} from 'primeng/divider';

import {TableModule} from 'primeng/table';
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import {SidebarModule} from 'primeng/sidebar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [			
    AppComponent,
    LoginComponent,
      DashboardComponent,
      ErrorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    TabMenuModule,
    SplitterModule,
    DividerModule,
    TableModule,
    HttpClientModule,
    FileUploadModule,
    BrowserAnimationsModule,
    DropdownModule,
    SidebarModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DialogModule

  ],
  providers: [CustomerService, ConfirmationService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
