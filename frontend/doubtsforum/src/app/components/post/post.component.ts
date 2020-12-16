import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  categories=new FormControl();
  categoryList: string[] = ['General','Technology','Sports','Health','Education','Fashion','Travel'];
  constructor() { }
  ngOnInit(): void {  
  }

}
