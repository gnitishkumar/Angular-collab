import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { discussion } from 'src/app/models/posts';
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';
import { CommentNode } from '../comment-tree/comment-tree.component';

@Component({
  selector: 'app-commenting',
  templateUrl: './commenting.component.html',
  styleUrls: ['./commenting.component.css']
})
export class CommentingComponent implements OnInit {
  data;
  pos:number;
  node:CommentNode;
  comment:discussion;
  isReplied:boolean=true;
  constructor(private route:ActivatedRoute,private fetchService:PostingdoubtService) { 
  }

  ngOnInit(): void {
    this.pos=parseInt(this.route.snapshot.paramMap.get('postId'));
    this.comment=this.fetchService.getPost(this.pos);
  }
  addToComment()
  {
    if(this.data)
    {
      this.node=new CommentNode(this.data)
      this.comment.comments.push(this.node);
    }
    (<HTMLInputElement>document.getElementById("txt-area")).value="";
    this.data=""
  }
  togglingReplies()
  {
    this.isReplied=!this.isReplied;
  }
}
