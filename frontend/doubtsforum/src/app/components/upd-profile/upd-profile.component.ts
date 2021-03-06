import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-upd-profile',
  templateUrl: './upd-profile.component.html',
  styleUrls: ['./upd-profile.component.css']
})
export class UpdProfileComponent implements OnInit {

  public username:string='';
  public password:string='';
  public email:string='';
  public profession:string='';
  public address:string='';
  public mobile:number=null;
  public zipcode:number=null;
  public city:string='';

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated())
    this.router.navigate(['']);
    else
    {
      this.authService.getProfile(localStorage.getItem('username')).subscribe(data=>
        {
          this.profession=data['profession'];
          this.mobile=data['mobile'];
          this.email=data['email'];
        });
    }
  }

  onUpd(form)
  {
     
    this.authService.updating(form.value.email,form.value.mobile,form.value.profession).subscribe(data=>{
      this.router.navigate(['/UserProfile']);
    }, err=>{
      window.alert('enter valid details');
    });
  }

}
