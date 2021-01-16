import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'events';
import { data } from 'jquery';
import { ScrollTopService } from 'src/app/scrolltop.service';
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
  constructor(private route:ActivatedRoute,private service:AuthService,private router:Router, private scrollTopService: ScrollTopService) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.scrollTo(0,0);
    
  }
  ngOnInit(): void {
    this.scrollTopService.setScrollTop();
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
       
    }
     
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
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      
        this.service.getProfile(usrId).subscribe(data=> {
        this.username=data['username'];
        this.email=data['email'];
        this.mobile=data['mobile'];
        this.profession=data['profession'];
        this.posts=data['posts'];
        this.last_login=data['last_login'];
       }); 
       document.body.scrollTop = document.documentElement.scrollTop = 0;
      window.scrollTo(0,0);
    }
    else
    {
      this.router.navigate(['']);
    } 
    this.top();
    
  }
  top()
  {
    document.body.scrollTop = document.documentElement.scrollTop = 5;
    window.scrollTo(0,0);
  }
}
