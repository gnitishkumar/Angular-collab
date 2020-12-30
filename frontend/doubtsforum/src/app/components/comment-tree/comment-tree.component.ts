import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';
// export class CommentNode {
//   text:string ='';
//   anwsers:CommentNode[] = [];
//   isOpen:boolean;
//   isReplied:boolean;
//   time:Date;
//   constructor(text:string){
//     this.text = text;
//     this.isReplied=true;
//     this.time=new Date();
//   }

//   addAnwser(newComment:CommentNode){
//     if(newComment.text.trim()){
//       this.anwsers.push(newComment);
//     }
//   }

//   removeComment(newComment:CommentNode){
//     let index = this.anwsers.indexOf(newComment);
//     if(~index){
//       this.anwsers.slice(index,1);
//     }
//   }
// }


@Component({
  selector: 'comment-tree',
  templateUrl: './comment-tree.component.html',
  styleUrls: [ './comment-tree.component.css' ]
})
export class CommentTree implements OnInit {
  @Input() comments;
  data:string;
  pos;
  @Output() notify = new EventEmitter();
  constructor(private route:ActivatedRoute,private fetchService:PostingdoubtService){
  }

  ngOnInit(){
    //console.log(this.comments);
    this.pos=parseInt(this.route.snapshot.paramMap.get('postId'));
  }

  addComment(parent){

    if(true)
    {    
        this.fetchService.addreply(this.data,parent,this.pos).subscribe(res=>{
        console.log(res);
        //  window.location.reload();
        // this.router.navigate(['commenting/'+this.pos]);
        this.data="";
          this.fetchService.getPostComments(this.pos).subscribe(res=>{
            this.comments=res;
            },err=>{
               console.log(err)
            });
          
          },err=>{
            console.log(err)
      });
    }
  }

  openCommentText(comment){
    console.log(comment)
    comment.isOpen = !comment.isOpen;
  }

  // remove(comment:CommentNode){
  //   // let index = this.comments.indexOf(comment);
  //   // this.comments = this.comments.splice(index,1);
  // }
  togglingReplies(comment)
  {
    comment.isReplied=!comment.isReplied;
  }
}
