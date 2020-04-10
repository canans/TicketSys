import { Component, OnInit, TemplateRef } from '@angular/core';
import { JourneyService } from '../services/journey.service';
import { Journey } from './journey';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {
  modalRef: any;

  constructor(private journeyService:JourneyService,
    private route:Router
   ) { }

  ngOnInit(): void {
    this.getJourney();
  }
   journeys:Journey[]=[];
   deneme:Journey;
   dnm:Journey[];
   seatone:number[]=[3,6,9,12,15,18,21,25,28,31];
   seattwo:number[]=[2,5,8,11,14,17,20,24,27,30];
   seattree:number[]=[1,4,7,10,13,16,19,22,23,26];
   
  getJourney(){
    this.journeyService.getAll().subscribe(
      data=>{
        this.journeys=data;
       
        const result = this.journeys.find( startLocation => name === 'kocaeli' );

          console.log(result) 
         this.deneme= this.journeys.find(x=>
          x.finishLocation='izmir' 
           )
        this.dnm=this.journeys.filter(x=>
          x.finishLocation='izmir')
         console.log(this.deneme,this.dnm);

      }
    
    );
  }

  selectSeat(){
    this.route.navigate(['/','seat']);
  }

  
  
}
