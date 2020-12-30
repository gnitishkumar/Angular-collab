import { UpdProfileComponent } from './components/upd-profile/upd-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentingComponent } from './components/commenting/commenting.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { FavouriteComponent } from './components/favourite/favourite.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'signup',component: SignupComponent },
  {path: 'login',component: LoginComponent },
  {path: 'profile/updprof',component: UpdProfileComponent },
  {path: 'profile/:userId',component: ProfileComponent },
  {path: 'profile/:userId/updprof',component:UpdProfileComponent },
  {path: 'UserProfile',component: ProfileComponent },
  {path: 'UserProfile/updprof',component: UpdProfileComponent },
  {path:'post',component:PostComponent},
  {path:'commenting/:postId',component:CommentingComponent},
  {path:'favourites',component:FavouriteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
