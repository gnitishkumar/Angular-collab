from django.test import TestCase
import requests
# Create your tests here.
import json
def get():
    res=requests.get('http://localhost:8000/filt/general')
    print(res.status_code)
    print(res.text)
get()