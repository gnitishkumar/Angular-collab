 
from django.urls import path
from .views import home,filt,comments
  

urlpatterns = [
    path('home/<usr>',home),
    path('filt/<category>/<usr>',filt),
    path('comments/<id>',comments)
]
