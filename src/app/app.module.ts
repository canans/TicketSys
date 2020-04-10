import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { JourneyComponent } from './journey/journey.component';

import{ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatDatepickerModule } from '@angular/material/datepicker';
import{HttpClientModule} from '@angular/common/http'
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { JourneyService } from './services/journey.service';
import { from } from 'rxjs';
import { JourneyAddComponent } from './journey-add/journey-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertService } from './services/alert.service';
import { ApiService } from './services/api.service';
import { TicketPaymetComponent } from './ticket-paymet/ticket-paymet.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { CommonModule } from '@angular/common';
import { TicketPrintComponent } from './ticket-print/ticket-print.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    JourneyComponent,
    JourneyAddComponent,
    LoginComponent,
    RegisterComponent,
    TicketPaymetComponent,
    SelectSeatComponent,
    TicketPrintComponent,

   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
    
  
  ],
  providers: [JourneyService,AlertService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
