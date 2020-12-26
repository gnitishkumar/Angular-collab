 
from django.urls import path
from .views import PostsView,LikesView,CommentsView
 

urlpatterns = [
    path('postdoubt',PostsView.as_view()),
    path('like',LikesView.as_view()),
    path('comment',CommentsView.as_view())
]
