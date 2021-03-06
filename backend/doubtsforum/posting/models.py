from django.db import models

# Create your models here.
from django.db import models
from django.db.models import Model
from django.contrib.auth.models  import User

class Posts(Model):
    question=models.TextField()
    postedtime=models.DateField()
    time= models.TimeField(auto_now=True, auto_now_add=False)
    user=models.ForeignKey(User,on_delete=models.CASCADE)

    # def __str__():
    #     return "user {}".format(user.id)

class Categories(Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    post=models.ForeignKey(Posts,on_delete=models.CASCADE)
    category=models.TextField()

class Likes(Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    post=models.ForeignKey(Posts,on_delete=models.CASCADE)
    liked=models.BooleanField(default=False)

class Comments(Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    post=models.ForeignKey(Posts,on_delete=models.CASCADE)
    description=models.TextField()
    parentComment=models.BigIntegerField(default=0)


class Bookmark(Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    post=models.ForeignKey(Posts,on_delete=models.CASCADE)
    bookmark=models.BooleanField(default=False)
# p1:
# 1 2pm <1 object>
