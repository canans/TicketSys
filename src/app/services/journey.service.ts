import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Journey } from '../journey/journey';
import { FormGroup } from '@angular/forms';
import {map} from "rxjs/internal/operators";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  PATH="/journey"

  journey_info= new BehaviorSubject('')
    private _cast = this.journey_info.asObservable();
  public get cast() {
    return this._cast;
  }
  public set cast(value) {
    this._cast = value;
  }
  constructor(private http:HttpClient,private apiservice:ApiService) { }

  getAll():Observable<Journey[]>{
    return this.http.get<Journey[]>(environment.API_BASE_PATH+this.PATH);
  }

  getById(id):Observable<any>{
    return this.apiservice.get("/journey",id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log(res);
          return {};
        }
      }
    ));
  }

  addJourney(journey):Observable<any>{
     
      return this.apiservice.post("/add-journey",journey).pipe(map(
        res =>{
          if(res){
            return res;
          }else{
            console.log("service",res);
            return {};
          }
        }
      ));;
  }

  getFillupseat(key,busID){
        
    return  this.apiservice.get('booking/'+key+'/'+busID+'/seat_booking.json')
     //console.log(this.Root_url+'booking/'+key+'/'+busID+'.json')
 }

  delete(id):Observable<any>{
    alert("bu öge silinecek")
    return this.apiservice.delete("/journey"+"/"+id).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log("service",res);
          return {};
        }
      }
    ));;
  }

  getByDate(data):Observable<any>{
    return this.apiservice.post("/deneme",data).pipe(map(
      res =>{
        if(res){
          return res;
        }else{
          console.log("service",res);
          return {};
        }
      }
    ));;
  }
}
