from django.test import TestCase
import requests
import json
# Create your tests here.
BASE_URL=r'http://localhost:8000/'
headers = {'Authorization': 'Token b50fd8362af73e4741c017c2bded8d29565a5a19'}

def postdt():
    data={
        'question':"what's your name?",
        'categories':['general','technology','health','education']
    }
    res=requests.post(BASE_URL+'postdoubt',data=json.dumps(data),headers=headers)
    print(res.status_code)
    print(res.text)
# postdt()

def like():
    data={
        'id':23
    }
    res=requests.post(BASE_URL+'like',data=json.dumps(data),headers=headers)
    print(res.status_code)
    print(res.text)
# like()
def comment():
    data={
        'id':23,
        'description':"hello world",
        'parentComment':1,
    }
    res=requests.post(BASE_URL+'comment',data=json.dumps(data),headers=headers)
    print(res.status_code)
    print(res.text)
comment()