import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  Observable } from 'rxjs';
import { Login } from './login';
import { Loginresponse } from './loginresponse';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  rootEndPoint:string = 'http://localhost:8080/pizzas';
  LoginEndpoint:string = this.rootEndPoint+'/user/login';
  constructor(private http:HttpClient) { }

  doLoginAction(loginDetails:Login):Observable<Loginresponse>
  {
    return this.http.post<Loginresponse>(`${this.LoginEndpoint}`,loginDetails);
  }
 
}