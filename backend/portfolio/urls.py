from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from project.views import project_list

from blog.views import blog_list, get_blog

urlpatterns = [
    path("admin/", admin.site.urls),
    path("get_blog/<int:id>", get_blog),
    path("blog_list/", blog_list),
    path("project_list/", project_list),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
