import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public username:string='';
  public password:string='';
  public email:string='';
  public confirm_pass:string='';
  public address:string='';
  public mobile:number=null;
  public zipcode:number=null;
  public profession:string='';

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  onReg(form)
  {
    if(form.valid)
     {
    //   this.authService.registering(form.value.username,form.value.password,form.value.email,form.value.mobile,form.value.state,form.value.address,form.value.city);
    //  this.router.navigate(['/login']);

    this.authService.signup(this.username,this.email,this.password,this.profession,this.mobile).subscribe(res=>{

    let respons=res
    if(this.password!=this.confirm_pass){
      alert("password and confirm password must be same");
      return;
    }
    if(res['text']=="success")
    {
      this.router.navigate(['/login']);
    }

  }, err=>{
    //console.log(err);

  })

    }
    else
    {
      alert("please fill valid details")
    }
  }

}
