from django.test import TestCase
import requests
import json

# Create your tests here.
BASE_URL=r'http://localhost:8000/'
def create_user():
    dat={
        'username':'siva',
        'password':'siva@05b4',
        'profession':'student',
        'email':'xyz@gmail.com',
        'mobile':1234567890
    }
    res=requests.post('http://localhost:8000/register',data=json.dumps(dat))
    print(res.status_code)
    print(res.text)

#create_user()

def update_user():
    dat={
        'username':'ravi',
        'email':'abc@gmail.com',
        'mobile':8066789012
    }
    res=requests.put('http://localhost:8000/register',data=json.dumps(dat))
    print(res.status_code)
    print(res)

#update_user()

def login():
    dat={
        'username':'Hanu',
        'password':'1228'
    }
    headers = {'Authorization': 'Token bd82153205ff3f7459b16928e6ae3637c269fcb5'}
    res=requests.post(BASE_URL+'login',dat)
    print(res.status_code)
    print(res.text)
    
login()