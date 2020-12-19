import { Injectable } from '@angular/core';
import { CommentNode } from '../components/comment-tree/comment-tree.component';
import { discussion } from '../models/posts';
@Injectable({
  providedIn: 'root'
})
export class PostingdoubtService {
  questions:discussion[]=[];
  constructor() {
    for(let i=0;i<20;i++)
    this.questions.push(new discussion());
  }
  addPost(p:discussion)
  {
    this.questions.unshift(p);
  }
  getPosts()
  {
    return this.questions;
  }
  getPost(pos)
  {
    return this.questions[pos];
  }
  updatePost(pos:number,post:CommentNode)
  {
    this.questions[pos].comments.push(post)
  }
}
