 
from django.urls import path
from .views import UserCrud,login,display
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register',UserCrud.as_view()),
    # path('login',login),
    path('login', obtain_auth_token, name='api_token_auth'),
    path("display",display.as_view())
]
