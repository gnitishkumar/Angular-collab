import { AuthService } from 'src/app/services/auth.service';
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
  apidata=null;
  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  onAdding()
   {
    this.authService.login(this.username,this.password).subscribe(async (res)=>{

      this.apidata=res;

       //console.log("siii");
             if(this.apidata['token']){

        await localStorage.setItem('token',this.apidata.token)
        await localStorage.setItem('username',this.username);

         this.router.navigate(['']);

       }
       else
       alert("enter valid login details")
     },err=>{
       console.log(err);
       alert("enter valid login details")
     });
  }
signup()
{
   this.router.navigate(['/signup']);
}
}
