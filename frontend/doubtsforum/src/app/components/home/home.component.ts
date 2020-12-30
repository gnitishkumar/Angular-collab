import { Component, OnChanges, OnInit } from '@angular/core';
import { discussion } from 'src/app/models/posts';
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';
//import { CommentNode } from '../comment-tree/comment-tree.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  multipleposts:any;
  constructor(private fetchService:PostingdoubtService) {


  }
  ngOnInit(): void {
    console.log("intit")
    this.add();

    //console.log(this.fetchService.getPosts());
  }
  ngOnLoad(){

  }
  bookmarked(id)
  {
    this.fetchService.toggleBookmark(id).subscribe(data=>
      {
        this.add();
      },err=>console.log(err));

  }
  liked(id)
  {
    this.fetchService.toggleLike(id).subscribe(data=>
      {
        this.add();
      },err=>console.log(err));

  }
  filter(cat)
  {
    let usr="NA";
    if (localStorage.getItem('username')){
      usr=localStorage.getItem('username');
    }
    this.fetchService.getFilteredPosts(cat,usr).subscribe(res=>{
      this.multipleposts=res;
      console.log(this.multipleposts);
    },err=>{
      console.log(err);
    });

  }
  add()
  {
    let usr="NA";
    if (localStorage.getItem('username')){
      usr=localStorage.getItem('username');
    }
    this.fetchService.getPosts(usr).subscribe(res=>{
      this.multipleposts=res;
      console.log(this.multipleposts);
    },err=>{
      console.log(err);
    });
  }
}
