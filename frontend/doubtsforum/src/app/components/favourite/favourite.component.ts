import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
 
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  multipleposts;
  constructor(private service:PostingdoubtService, private serve:AuthService, private router:Router) { }
  timed=false;
  ngOnInit(): void {
    if(! this.serve.isAuthenticated())
    this.router.navigate(['']);
    this.add();
  }
   
  liked(id)
  {
    this.service.toggleLike(id).subscribe(data=>
      {
        this.add();
      });

  }
  bookmarked(id)
  {
    this.service.toggleBookmark(id).subscribe(data=>
      {
        this.add();
      });

  }
  x
  add()
  {
      this.service.getFavourites().subscribe(data=>
      {
        this.multipleposts=data;
       
        if(this.multipleposts==null)
        this.timed=true
      },err=>{
        if(this.multipleposts==null)
        this.timed=true
         
      }
    )
  
  }
}
