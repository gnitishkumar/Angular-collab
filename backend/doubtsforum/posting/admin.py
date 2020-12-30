from django.contrib import admin
from .models import Posts,Categories,Likes,Comments,Bookmark
# Register your models here.
class PostsAdmin(admin.ModelAdmin):
     list_display=[
        'id','question','postedtime','time','user'
    ]

class CategoriesAdmin(admin.ModelAdmin):
     list_display=[
        'id','post','user','category'
    ]
class LikesAdmin(admin.ModelAdmin):
    list_display=[
        'id','user','post','liked'
    ]

class CommentsAdmin(admin.ModelAdmin):
    list_display=['id','user','post','parentComment','description']

class BookmarkAdmin(admin.ModelAdmin):
    list_display=[
        'id','user','post','bookmark'
    ]
admin.site.register(Likes,LikesAdmin)
admin.site.register(Posts,PostsAdmin)
admin.site.register(Categories,CategoriesAdmin)
admin.site.register(Comments, CommentsAdmin)
admin.site.register(Bookmark,BookmarkAdmin)