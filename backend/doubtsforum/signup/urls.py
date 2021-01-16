 
from django.urls import path
from .views import UserCrud,register,update,login
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('register',UserCrud.as_view()),
    path('profile/<username>',UserCrud.as_view()),
    path('login', login),
    path('update',update.as_view())
]
