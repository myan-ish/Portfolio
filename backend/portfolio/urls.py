from django.contrib import admin
from django.urls import path

from blog.views import blog_list, get_blog

urlpatterns = [
    path("admin/", admin.site.urls),
    path("get_blog/<int:id>", get_blog),
    path("blog_list/", blog_list),
]
