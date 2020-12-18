import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string='';
  public password:string='';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onAdding()
   {
    //this.authService.isRegistered=false;
  //     // console.log(this.username);
  //      // console.log(this.password);
  //   this.authService.logged(this.username,this.password);
  //   if(this.authService.isLogged)
  //   this.router.navigate(['/home']);
  }
signup()
{
   this.router.navigate(['/signup']);
}
}
