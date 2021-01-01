import { HostListener } from '@angular/core';
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
  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }
  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
  }

  top()
  {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
