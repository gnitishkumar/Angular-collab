from django.shortcuts import render
from django.views.generic import View
from rest_framework.views import APIView
from .forms import PostsForm,CategoriesForm,LikesForm,CommentsForm
from django.contrib.auth.models import User 
import datetime
from rest_framework.permissions import IsAuthenticated
import json
from django.http import HttpResponse
from .models import Posts,Categories,Likes
# Create your views here.

class CatageroiesView():
    def add(self,user,post,cat):
        data={
            'user':user,
            'post':post,
        }
      
        for i in cat:
            data['category']=i
            c=CategoriesForm(data)
            if c.errors:pass
            else:
                c.save(commit=True)

class PostsView(APIView,CatageroiesView):
    permission_classes = (IsAuthenticated,)   
    def get(self,request,*args,**kwargs):return HttpResponse("sucess",status=200)
    
    def post(self,request, *args,**kwargs):
        data=json.loads(request.body)
        user=User.objects.get(username=request.user)
        data['user']=user 
        data['postedtime']= datetime.datetime.now()
        res=PostsForm(data)
        if res.errors:
            return HttpResponse(res.errors,status=400)
        res.save(commit=True)
        print(res.fields)
        self.add(user,res.instance,data['categories'])
        a=Categories.objects.filter(post=res.instance)
        print(a)
        return HttpResponse("success")

    def delete(self,request,*args,**kwargs):pass
    def put(self,request,*args,**kwargs):pass

#localhost:8000/like"
class LikesView(APIView):
    permission_classes = (IsAuthenticated,)   
    def post(self,request,*args,**kwargs):
        user=User.objects.get(username=request.user)
        post=Posts.objects.get(id=json.loads(request.body)['id'])
        flag=True
        try:
            like=Likes.objects.get(user=user,post=post)
            flag=not like.liked
        except :
            like=None
        data={
            'user':user,
            'post':post,
            'liked':flag
        }
        res=LikesForm(data,instance=like)
        if res.is_valid():
            res.save()
            return HttpResponse("success",status=200)
        return HttpResponse("failed",status=500)
#parentCommment
class CommentsView(APIView):
    permission_classes = (IsAuthenticated,)   
    def get(self,request,*args,**kwargs):pass
    
    def post(self,request,*args,**kwargs):
        
        data=json.loads(request.body)
        user=User.objects.get(username=request.user)
        post=Posts.objects.get(id=json.loads(request.body)['id'])
        
        data['user']=user
        data['post']=post 
        data['parentComment']=data.get('parentComment',0)
        res=CommentsForm(data)
        res.save()
        return HttpResponse("success",status=200)
    








