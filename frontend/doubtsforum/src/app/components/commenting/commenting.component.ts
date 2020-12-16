import { Component, OnInit } from '@angular/core';
import { CommentNode } from '../comment-tree/comment-tree.component';

@Component({
  selector: 'app-commenting',
  templateUrl: './commenting.component.html',
  styleUrls: ['./commenting.component.css']
})
export class CommentingComponent implements OnInit {
  comments:Array<CommentNode>=[];
  data;
  constructor() { 
  }

  ngOnInit(): void {
  }
  addToComment()
  {
    if(this.data)
    {
      this.comments.push(new CommentNode(this.data));
    }
    // (<HTMLInputElement>document.getElementById("txt-area")).value="";
  }
}
