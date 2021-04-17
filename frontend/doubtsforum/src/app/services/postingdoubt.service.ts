import { Injectable } from '@angular/core';
//import { CommentNode } from '../components/comment-tree/comment-tree.component';
import { discussion } from '../models/posts';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostingdoubtService {
  url="https://doubtsforum.herokuapp.com/";
  // url="http://localhost:8000/";
  questions:discussion[]=[];
  constructor(private http:HttpClient) {
    for(let i=0;i<20;i++)
    this.questions.push(new discussion());
  }
  addPost(p:discussion)
  {
    this.questions.unshift(p);
    return this.http.post(this.url+'postdoubt',{"question":p.question,"categories":p.categories});
  }
  getPosts(usr)
  {
    //return this.questions;
    return this.http.get(this.url+'home/'+usr);
  }
  getFilteredPosts(cat,usr)
  {
    //return this.questions;
    return this.http.get(this.url+'filt/'+cat+'/'+usr);
  }
  getPost(pos)
  {
    return this.questions[pos];
  }
  getPostId(id)
  {
    return this.http.get(this.url+'postId/'+id)
  }
  getPostComments(id)
  {
    return this.http.get(this.url+'comments/'+id)
  }
  addComment(data,postid)
  {
    return this.http.post(this.url+'addcomment',{"data":data,"id":postid});
  }
  addreply(data,parentid,postid)
  {
    return this.http.post(this.url+'addcomment',{"data":data,"parentComment":parentid,"id":postid});
  }

  updatePost(pos:number,post)
  {
    this.questions[pos].comments.push(post)
  }
  getProfession(username)
  {
    return this.http.get(this.url+'profession',{params:{"username":username}})
  }
  deletePost(id)
  {
    return this.http.post(this.url+'deletepost',{"id":id});
  }
  toggleBookmark(id){
    return this.http.post(this.url+"bookmark",{'id':id});
  }

  toggleLike(id){
    return this.http.post(this.url+"like",{'id':id});
  }
  getFavourites()
  {
    return this.http.get(this.url+"bookmark");
  }
}
