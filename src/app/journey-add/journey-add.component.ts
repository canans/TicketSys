import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JourneyService } from '../services/journey.service';
import { Journey } from '../journey/journey';

@Component({
  selector: 'app-journey-add',
  templateUrl: './journey-add.component.html',
  styleUrls: ['./journey-add.component.css']
})
export class JourneyAddComponent implements OnInit {
  submitted = false;
  loading=false;
  constructor(private fb:FormBuilder,
              private journeyService:JourneyService) { }

  
  countries = [ 'İstanbul', 'Ankara','İzmir']
  journeyForm:FormGroup;
  journeys:Journey[]=[];
  deneme:any[];
  ngOnInit(): void {
    

      this.journeyForm=this.fb.group({
        startLocation: ['Kocaeli'],
        finishLocation:[''],
        startDate:['',Validators.required],
        startTime:['',Validators.required],
        capacity:['',Validators.required],
        ticketPrice:['',[Validators.required, Validators.minLength(2),Validators.maxLength(4)]],
        plaque:['', [Validators.required, Validators.minLength(7),Validators.maxLength(7)]],
        driverName:['',Validators.required]


      });
    
     this.getJourney();
  }

 get f() { return this.journeyForm.controls; }
 
 onSubmit() {
     this.submitted = true;

     // reset alerts on submit
   

     // stop here if form is invalid
     if (this.journeyForm.invalid) {
         return;
     }

   //  this.journeys=this.journeyForm.value;
   this.journeys=this.journeyForm.value;

   console.log(this.journeys);
 }
 createJourney(){
   
  if (!this.journeyForm.valid)
      return;

    this.journeyService.addJourney(this.journeyForm.value).subscribe(
      data => {
       
        alert("Succesfully Added Product details")
      },
      Error => {alert("failed while adding journey details")}
      )
    
 }
 

   
 getJourney(){
  this.journeyService.getAll().subscribe(
    data=>{
      this.journeys=data;
    }
  
  );
}

deleteJourney(value){
  this.journeyService.delete(value).subscribe(
    data=>{
      alert("Succesfully delete");
    }
  )
 
}

update(id){
  this.journeyService.getById(id).subscribe(
    data=>{
      alert("id:"+id)
      console.log(data.id);
      this.deneme=data;
       
    }
    
  )
  

    
}

 
  
}
