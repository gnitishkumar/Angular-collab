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
# Create your views here.
 
class UserCrud(View):
     
    def get_user(self,username):
        try:
            return User.objects.get(username=username)
        except:
            return None
    def get(self,request,*args,**kwargs):pass

    def post(self,request,*args,**kwargs):
        data=json.loads(request.body)
        try:
            res=User.objects.create_user(username=data['username'],password=data['password'],profession=data['profession'],email=data['email'],mobile=data['mobile'])
            res.save()
            return HttpResponse("suceess",status=200)
        except:
            return HttpResponse("UserAlreadyExists",status=409)
        # return HttpResponse(json.dumps(res.errors),status=409)

    def put(self,request,*args,**kwargs):
        data=json.loads(request.body)
        user=self.get_user(data['username'])
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
            return HttpResponse("updatedsucessfully", status=200)
        return HttpResponse(json.dumps(res.errors),status=409)

    def delete(self,request,*args,**kwargs):pass


def login(request):
    data=json.loads(request.body)
    user=authenticate(username=data['username'],password=data['password'])
    #user=User.objects.get(username=data['username'])
    if user:
        token=Token.objects.get_or_create(user=user)
        dat={
            'username':data['username'],
            'password':data['password'],
            'token':str(token[0])
        }
        # json_data=serialize('json',[dat,])
        return JsonResponse(dat,status="200")
    return HttpResponse("UnauthorizedUser",status=401)

class display(APIView):
    permission_classes = (IsAuthenticated,)   
    def get(self,request,*args,**kwargs):
        print(request.user)
        return HttpResponse("hello")
