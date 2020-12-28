import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

url="http://localhost:8000/";

 header;
 username;

  constructor(private http:HttpClient) {

  }

  signup(username,email,password,profession,phone){
    return this.http.post(this.url+'register',{"username":username,"password":password,"email":email,"mobile":phone,"profession":profession });
  }

  login(username,password)
  {  this.username=username;
    return this.http.post(this.url+'login',{'username':username,'password':password});
  }



}
