import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn:boolean=false;
  title = 'doubtsforum';
  logIn()
  {
    this.loggedIn=!this.loggedIn;
  }
}
