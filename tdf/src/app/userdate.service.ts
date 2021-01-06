import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";

import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserdateService {

  public URL = "http://localhost:3000/getData";
  constructor(private Http : HttpClient) { }

  public postRequestData(user : User) : Observable<any> {
    return this.Http.post<any>(this.URL , user);
  }
}
