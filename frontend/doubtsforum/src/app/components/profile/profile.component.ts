import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public username:string='';
 
  public email:string='';
  public profession:string='';
  public mobile:number=null;
  public posts:number=null;
  public last_login:string='';
  not_user:boolean=false;
  constructor(private route:ActivatedRoute,private service:AuthService,private router:Router) {
  }
  ngOnInit(): void {
    let usrId="";
    let u2="";
    if(localStorage.getItem('username')){
      usrId=localStorage.getItem('username');
    }
    try
    {
      u2=this.route.snapshot.paramMap.get('userId');
    }
    catch(error)
    {
      console.log(error)
    }
    console.log(usrId);
    if(u2==usrId)
    {
      this.not_user=false;
    }
    else
    {
      if(u2)
      {
        usrId=u2;
        this.not_user=true;
      }
    }
    
    if(usrId)
    {
        this.service.getProfile(usrId).subscribe(data=> {
        this.username=data['username'];
        this.email=data['email'];
        this.mobile=data['mobile'];
        this.profession=data['profession'];
        this.posts=data['posts'];
        this.last_login=data['last_login'];
      },err=>{console.log(err)}); 
    }
    else
    {
      this.router.navigate(['']);
    } 
  }
}
