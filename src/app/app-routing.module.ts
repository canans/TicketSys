import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JourneyComponent } from './journey/journey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { JourneyAddComponent } from './journey-add/journey-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TicketPaymetComponent } from './ticket-paymet/ticket-paymet.component';
import { SelectSeatComponent } from './select-seat/select-seat.component';
import { CommonModule } from '@angular/common';
import { TicketPrintComponent } from './ticket-print/ticket-print.component';




const routes: Routes = [
  {
    path:'journey',component:JourneyComponent
  },
  {
    path:'',component:HomePageComponent
  },
  {
    path:'journey-add',component:JourneyAddComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'journey/seat/payment',component:TicketPaymetComponent
  },
  {
    path:'journey/seat',component:SelectSeatComponent
  },
  {
    path:'journey/seat/payment/print',component:TicketPrintComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
