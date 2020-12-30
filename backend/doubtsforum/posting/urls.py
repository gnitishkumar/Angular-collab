from django.urls import path
from .views import PostsView,LikesView,CommentsView,getProfession,getPostId,BookmarkView
 

urlpatterns = [
    path('postdoubt',PostsView.as_view()),
    path('like',LikesView.as_view()),
    path('profession',getProfession),
    path('postId/<id>',getPostId),
    path('addcomment',CommentsView.as_view()),
    path('bookmark',BookmarkView.as_view())
]