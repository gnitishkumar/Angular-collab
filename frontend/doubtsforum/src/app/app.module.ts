import { AuthheaderInterceptor } from './http-interceptor/authheader.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentTree } from './components/comment-tree/comment-tree.component';
import { CommentingComponent } from './components/commenting/commenting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UpdProfileComponent } from './components/upd-profile/upd-profile.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { ScrollTopService } from './scrolltop.service';
//import {AuthheaderInterceptor}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CommentTree,
    CommentingComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    UpdProfileComponent,
    FavouriteComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ScrollTopService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthheaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
