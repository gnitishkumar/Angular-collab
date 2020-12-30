 
from django.urls import path
from .views import UserCrud,register,update
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register',UserCrud.as_view()),
    path('profile/<username>',UserCrud.as_view()),
    path('login', obtain_auth_token, name='api_token_auth'),
    path('update',update.as_view())
]
