from django.shortcuts import render
from django.views.generic import View
from rest_framework.views import APIView
from .forms import PostsForm,CategoriesForm,LikesForm,CommentsForm,BookmarkForm
from django.contrib.auth.models import User 
import datetime
from rest_framework.permissions import IsAuthenticated
import json
from django.http import HttpResponse
from .models import Posts,Categories,Likes,Comments,Bookmark
from django.core.serializers import serialize
from home.activity import posted
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
    def get(self,request,*args,**kwargs):return HttpResponse(status=200)
    
    def post(self,request, *args,**kwargs):
        data=json.loads(request.body)
        user=User.objects.get(username=request.user)
        data['user']=user 
        data['postedtime']= datetime.datetime.now()
        data['time']= datetime.datetime.now().strftime("%X")
        res=PostsForm(data)
        if res.errors:
            return HttpResponse(res.errors,status=400)
        res.save(commit=True)
       
        self.add(user,res.instance,data['categories'])
        a=Categories.objects.filter(post=res.instance)
      
        return HttpResponse(status=200)

    def delete(self,request,*args,**kwargs):pass
    def put(self,request,args,*kwargs):pass

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
            return HttpResponse(status=200)
        return HttpResponse(status=500)
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
        data['description']=data['data']
        data['parentComment']=data.get('parentComment',0)
        res=CommentsForm(data)
        res.save()
        return HttpResponse(status=200)
    
def getProfession(request,APIView):
    res=''
    user=User.objects.get(username=request.user)
    console.log(user)
    res=user['profession']
    return HttpResponse(json.dumps(res),status=200)

def getPostId(request,id):
    j=Posts.objects.get(id=id)
    
    temp=User.objects.get(username=j.user)
    data={}
    data['username']=temp.username
    data['profession']=temp.profession
    data['id']=j.id 
    data['description']=j.question
    data['postedtime']=posted(j.postedtime,j.time)
    data['liked']=len(Likes.objects.filter(post=j,liked=True))
    data['comment']=len(Comments.objects.filter(post=j,parentComment=0))
    data['categories']=[]
    for k in json.loads(serialize('json',Categories.objects.filter(user=temp,post=j))):
        data['categories'].append(k['fields']['category'])
    
    return HttpResponse(json.dumps(data),status=200)


class BookmarkView(APIView):
    permission_classes = (IsAuthenticated,)   
    def get(self,request,*args,**kwargs):
        res=[]
        user=User.objects.get(username=request.user)
        bposts=[i['fields'] for i in json.loads(serialize('json',Bookmark.objects.filter(user=user,bookmark=True)))]
        for i in bposts:    
            data={}
           
            j=Posts.objects.get(id=i['post'])
            user=User.objects.get(username=j.user)
            data['username']=user.username
            data['bookmark']=True
            data['profession']=user.profession
            data['id']=j.id 
            data['description']=j.question
            data['postedtime']=posted(j.postedtime,j.time)
            data['liked']=len(Likes.objects.filter(post=j,liked=True)) 
            data['like']=False
            l=0
            l=len(json.loads(serialize('json',Likes.objects.filter(user=user,post=j))))
            if l>0:
                data['like']=json.loads(serialize('json',Likes.objects.filter(user=user,post=j)))[0]['fields']['liked']
            data['comment']=len(Comments.objects.filter(post=j,parentComment=0))
            data['categories']=[]
            for k in json.loads(serialize('json',Categories.objects.filter(user=user,post=j))):
                data['categories'].append(k['fields']['category'])
            if data:
                res.append(data)
        if res:
            return HttpResponse(json.dumps(res),status=200)
        return HttpResponse(status=204)

    def post(self,request,*args,**kwargs):
        user=User.objects.get(username=request.user)
        post=Posts.objects.get(id=json.loads(request.body)['id'])
        flag=True
        try:
            like=Bookmark.objects.get(user=user,post=post)
            flag=not like.bookmark
        except :
            like=None
        data={
            'user':user,
            'post':post,
            'bookmark':flag
        }
        res=BookmarkForm(data,instance=like)
        if res.is_valid():
            res.save()
            return HttpResponse(status=200)
        return HttpResponse(status=500)