import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from "rxjs"
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataHandlingService {

  private counter = 0;
  private data = [];
  constructor(private http : HttpClient) {
   }

   

   fetchData() : any{
     return this.data.length ? 
     this.data.filter(once => !once.check) :
     this.data
   }

   setData(data){
    this.data = [...this.data , {data  : data , counter : this.counter++ , check : false}];
   }

   deleteData(data , counter){
      this.data.map(once => {
        if(once.data == data  && once.counter == counter)
        {
          once.check = true;
        }
      })
   }


}
