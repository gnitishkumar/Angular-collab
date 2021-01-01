import { HostListener } from '@angular/core';
import { Component, OnChanges, OnInit } from '@angular/core';
 
 
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';
//import { CommentNode } from '../comment-tree/comment-tree.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  multipleposts:any;
  timed:boolean=false;
  user:string;
  constructor(private fetchService:PostingdoubtService) {

  }
  ngOnInit(): void {
     
    this.add();
   
    // setTimeout(this.timeOut,5);
    //console.log(this.fetchService.getPosts());
  }
  ngOnLoad(){

  }
  timeOut()
  {
    this.timed=true;
  
  }
  bookmarked(id)
  {
    this.fetchService.toggleBookmark(id).subscribe(data=>
      {
        this.add();
      },err=>{
        window.alert("pls login");
    
      }
      );
  }
  liked(id)
  {
    this.fetchService.toggleLike(id).subscribe(data=>
      {
        this.add();
      },err=>
      {
        window.alert("please login");
         
      });

  }
  filter(cat)
  {
    let usr="NA";
    if (localStorage.getItem('username')){
      usr=localStorage.getItem('username');
    }
    this.fetchService.getFilteredPosts(cat,usr).subscribe(res=>{
      this.multipleposts=res;
       
    },err=>{
       
    });
    this.timed=true;
    this.user=localStorage.getItem('username');
  }
  add()
  {
    let usr="NA";
    if (localStorage.getItem('username')){
      usr=localStorage.getItem('username');
    }
    this.fetchService.getPosts(usr).subscribe(res=>{
      this.multipleposts=res;
    
    },err=>{
      
    });
    this.user=localStorage.getItem('username');
  }
}
