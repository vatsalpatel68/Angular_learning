import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(){
    return[
      {
        name : "vatsal",
        age : 21
      },
      {
        name : "deep",
        age : 20
      }
    ]
  }
}
