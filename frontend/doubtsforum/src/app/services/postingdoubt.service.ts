import { Injectable } from '@angular/core';
import {  } from "module";
import { post } from '../models/posts';
@Injectable({
  providedIn: 'root'
})
export class PostingdoubtService {
  questions:post[]=[];
  constructor() {}
  addPost(p:post)
  {
    this.questions.push(p);
  }
  getPosts()
  {
    return this.questions;
  }
  getPost(pos)
  {
    return this.questions[pos];
  }
}
