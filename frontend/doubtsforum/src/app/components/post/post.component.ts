import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { discussion } from 'src/app/models/posts';
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  categories=new FormControl();
  p;
  categoryList: string[] = ['General','Technology','Sports','Health','Education','Fashion','Travel'];
  constructor(private fetchService:PostingdoubtService) { }
  ngOnInit(): void {  
  }
  verify()
  {
    this.p=new discussion();
    this.p.name="cristiano";
    this.p.subtitle="football player";
    this.p.question=(<HTMLInputElement>(document).getElementsByClassName("question")[0]).value;
    this.p.categories=this.categories.value;
    this.fetchService.addPost(this.p);
  }
}