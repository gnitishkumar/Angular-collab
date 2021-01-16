import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { discussion } from 'src/app/models/posts';
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';


@Component({
  selector: 'app-commenting',
  templateUrl: './commenting.component.html',
  styleUrls: ['./commenting.component.css']
})
export class CommentingComponent implements OnInit {
  data;
  pos:number;
  node;
  MainComments;
  comment:any;
  isReplied:boolean=true;
  constructor(private route:ActivatedRoute,private fetchService:PostingdoubtService,private router:Router) {
  }

  ngOnInit(): void {
    this.pos=parseInt(this.route.snapshot.paramMap.get('postId'));
    this.fetchService.getPostId(this.pos).subscribe(res=>{
      this.comment=res;
    },err=>{
      
    });

    this.fetchService.getPostComments(this.pos).subscribe(res=>{
      this.MainComments=res;
    },err=>{
       
    });

  }
  addToComment()
  {
    if(true)
     {    
          this.fetchService.addComment(this.data,this.pos).subscribe(res=>{
           
          this.load();
          this.data="";
          window.location.reload();
        },err=>{
          window.alert("please login !");
          this.router.navigate(['login'])
          
        });
    }

  }

  load(){
      
      this.fetchService.getPostComments(this.pos).subscribe(res=>{
      this.MainComments=res;
      },err=>{
      
    });
  }
  togglingReplies()
  {
    this.isReplied=!this.isReplied;
  }
  // addComment(comment:CommentNode){
  //   comment.addAnwser(new CommentNode(this.text));
  //   comment.isOpen = false;
  //   this.text="";
  //   console.log(this.comments);
  // }

  openCommentText(comment){
   
    comment.isOpen = !comment.isOpen;
  }

  remove(comment){
    // let index = this.comments.indexOf(comment);
    // this.comments = this.comments.splice(index,1);
  }

}
