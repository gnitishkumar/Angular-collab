import { Component, OnChanges, OnInit } from '@angular/core';
import { discussion } from 'src/app/models/posts';
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';
import { CommentNode } from '../comment-tree/comment-tree.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  multipleposts:Array<discussion>=[];
  constructor(private fetchService:PostingdoubtService) { 
   

  }
  ngOnInit(): void {
    this.multipleposts=this.fetchService.getPosts();
    console.log(this.fetchService.getPosts());
  }
  liked(post:discussion)
  {
    post.likes+=1;
  }

}
