import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

url="https://doubtsforum.herokuapp.com/";
  // url="http://localhost:8000/";
  header;
  username;

  constructor(private http:HttpClient) {

  }

  signup(username,email,password,profession,phone){
    return this.http.post(this.url+'register',{"username":username,"password":password,"email":email,"mobile":phone,"profession":profession });
  }

  login(username,password)
  {  
    this.header={ 'content-type': 'application/json'} 
    const body=JSON.stringify({'username':username+"",'password':password+""});
    return this.http.post(this.url+'login', body,{headers:this.header});
  }
  isAuthenticated()
  {
    if(localStorage.getItem('token'))
    return true;
    return false;
  }
  getProfile(usr)
  {
    
    return this.http.get(this.url+"profile/"+usr);
  }
  updating(mail,mobile,profession)
  {
    return this.http.put(this.url+"update",{'email':mail,'mobile':mobile,'profession':profession});
  }
}
