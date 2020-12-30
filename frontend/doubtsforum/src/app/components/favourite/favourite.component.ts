import { Component, OnInit } from '@angular/core';
import { PostingdoubtService } from 'src/app/services/postingdoubt.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  multipleposts=null;
  constructor(private service:PostingdoubtService) { }

  ngOnInit(): void {
    this.add();
  }

  liked(id)
  {
    this.service.toggleLike(id).subscribe(data=>
      {
        this.add();
      },err=>console.log(err));

  }
  bookmarked(id)
  {
    this.service.toggleBookmark(id).subscribe(data=>
      {
        this.add();
      },err=>console.log(err));

  }
  add()
  {
      this.service.getFavourites().subscribe(data=>
      {
        this.multipleposts=data;
      },err=>{
        console.log(err);
      }
    )
  }
}
