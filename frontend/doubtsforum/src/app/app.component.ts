import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean=false;
  title = 'doubtsforum';
  constructor(private serve:AuthService){}
  logIn()
  {
    return this.serve.isAuthenticated();
  }
  logOut()
  {
    localStorage.clear();
    window.location.reload();
  }
}
