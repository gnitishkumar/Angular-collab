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
    this.fetchService.getPosts().subscribe(res=>{
      this.multipleposts=res;
      console.log(this.multipleposts);
    },err=>{
      console.log(err);
    });

    //console.log(this.fetchService.getPosts());
  }
  ngOnLoad(){

  }
  liked(post:discussion)
  {
    post.likes+=1;
  }

}
