import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentTree } from './components/comment-tree/comment-tree.component';
import { CommentingComponent } from './components/commenting/commenting.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'post',component:PostComponent},
  {path:'commenting',component:CommentingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
