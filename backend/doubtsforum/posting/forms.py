from django import forms
from .models import Posts, Comments, Likes, Categories,Bookmark

class PostsForm(forms.ModelForm):
    class Meta:
        model=Posts 
        fields='__all__'

class CommentsForm(forms.ModelForm):
    class Meta:
        model=Comments 
        fields='__all__'

class CategoriesForm(forms.ModelForm):
    class Meta:
        model=Categories
        fields='__all__'

class LikesForm(forms.ModelForm):
    class Meta:
        model=Likes 
        fields='__all__'

class BookmarkForm(forms.ModelForm):
    class Meta:
        model=Bookmark 
        fields='__all__'