import { UpdProfileComponent } from './components/upd-profile/upd-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentTree } from './components/comment-tree/comment-tree.component';
import { CommentingComponent } from './components/commenting/commenting.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'signup',component: SignupComponent },
  {path: 'login',component: LoginComponent },
  {path: 'profile/updprof',component: UpdProfileComponent },
  {path: 'profile/:userId',component: ProfileComponent },
  {path: 'profile',component: ProfileComponent },
  {path: 'profile/:userId/updprof',component: UpdProfileComponent },
  {path:'post',component:PostComponent},
  {path:'commenting/:postId',component:CommentingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
