from django.shortcuts import render
from django.views.generic import View
import json
from .forms import UserForm
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.viewsets import ModelViewSet
from django.core.serializers import serialize
from django.http import JsonResponse
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from posting.models import Posts
# Create your views here.
import datetime

def register(request):
    data=json.loads(request.body)
   
    try:
        res=User.objects.create_user(username=data['username'],password=data['password'],profession=data['profession'],email=data['email'],mobile=data['mobile'])
        res.save()
        cont={"text":"success"}
        return JsonResponse(cont,status=200)
    except:return HttpResponse(status=409)

class update(APIView):
    permission_classes=(IsAuthenticated,)
    
    def put(self,request,*args,**kwargs):
        user=User.objects.get(username=request.user)
        data=json.loads(request.body)
        original={
            'username':user.username,
            'password':user.password,
            'profession':user.profession,
            'email':user.email,
            'mobile':user.mobile
        }
        original.update(data)
        res=UserForm(original,instance=user)
        if res.is_valid():
            res.save(commit=True)
            return HttpResponse(status=200)
        return HttpResponse(json.dumps(res.errors),status=409)

class UserCrud(View):   
    def get_user(self,username):
        try:
            return User.objects.get(username=username)
        except:
            return None
    def get(self,request,username,*args,**kwargs):
        user=self.get_user(username)
        original={
            'username':user.username,
            'profession':user.profession,
            'email':user.email,
            'mobile':user.mobile,
            'last_login':str(user.last_login.strftime("%c")),
            'posts':len(Posts.objects.filter(user=user))
        }
        return HttpResponse(json.dumps(original),status=200)
    #@csrf_exempt
    def post(self,request,*args,**kwargs):
        data=json.loads(request.body)
     
        try:
            res=User.objects.create_user(username=data['username'],password=data['password'],profession=data['profession'],email=data['email'],mobile=data['mobile'])
            res.save()
            cont={"text":"success"}
            return JsonResponse(cont,status=200)
        except:return HttpResponse(status=409)
        #return HttpResponse(json.dumps(res.errors),status=409)

    def put(self,request,*args,**kwargs):
        data=json.loads(request.body)
        user=self.get_user(data['username'])
        

    def delete(self,request,args,*kwargs):pass


def login(request):
    data=json.loads(request.body)
    user=authenticate(username=data['username'],password=data['password'])
    #user=User.objects.get(username=data['username'])
    if user:
        token=Token.objects.get_or_create(user=user)
        token=token[0]
        dat={
            'token':str(token),
        }
        user.last_login=datetime.datetime.now()
        user.save()
        # json_data=serialize('json',[dat,])
        return JsonResponse(dat,status=200)
 
    return HttpResponse(status=401)

 