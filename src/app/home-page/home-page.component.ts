import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JourneyService } from '../services/journey.service';
import { Journey } from '../journey/journey';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
submitted=false;
loading=false;
  constructor(private fb:FormBuilder,
              private journeyService:JourneyService) { }

  journeyForm:FormGroup;
  countries = [ 'İstanbul', 'Ankara','İzmir']
  journeys:Journey[]=[];
  ngOnInit(): void {
    this.journeyForm=this.fb.group({
      startLocation:['',Validators.required],
      finishLocation: ['İstanbul',Validators.required],
      startDate:['',Validators.required]
      

    });
    
  }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
  

    // stop here if form is invalid
    if (this.journeyForm.invalid) {
      this.loading=true;
        return;
    }
  }
  
  get f() { return this.journeyForm.controls; }
  
  getByDate(){
    this.journeyService.getByDate(this.journeyForm.value).subscribe(
      data=>{
        console.log(this.journeyForm.value)
           alert("successfuly post");
       }
       )
   }

}
