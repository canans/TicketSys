import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JourneyService } from '../services/journey.service';

@Component({
  selector: 'app-ticket-print',
  templateUrl: './ticket-print.component.html',
  styleUrls: ['./ticket-print.component.css']
})
export class TicketPrintComponent implements OnInit {
createTicket;
  constructor( private route:Router,
    private journeyService:JourneyService) { }

  ngOnInit(): void {

    this.journeyService.cast.subscribe(
      res=>this.createTicket=res,
    )
  }

}
