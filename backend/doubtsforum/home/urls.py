 
from django.urls import path
from .views import home,filt,comments
  

urlpatterns = [
    path('home',home),
    path('filt/<category>',filt),
    path('comments/<id>',comments)
]
