 
from django.contrib import admin
from django.urls import path,include
from signup import views
from signup import urls as u1
from posting import urls as u2
from home import urls as u3
urlpatterns = [
    path('',include(u1)),
    path('',include(u2)),
    path('',include(u3)),
    path('admin/', admin.site.urls),
]
