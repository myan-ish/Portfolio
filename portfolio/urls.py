from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from project.views import project_list

from blog.views import blog_list, get_blog
from portfolio import views

ssr_patterns = [
    path("", views.index),
    path("blog/", views.blogs),
    path("blog/<int:id>/", views.blogs),
    path("favicon.ico", views.favicon),
    path("csrf-demo/", views.csrf_demo),
    path("csrf-demo/checker/", views.csrf_demo_checker),
    path("error-demo/", views.error_demo),
    path("error-demo/trigger/", views.error_demo_trigger),
    path("middleware-tester/", views.middleware_tester),
    path("middleware-tester/table/", views.middleware_tester_table),
    path("partial-rendering/", views.partial_rendering),
]

urlpatterns = [
    path("admin/", admin.site.urls),
    path("get_blog/<int:id>", get_blog),
    path("blog_list/", blog_list),
    path("project_list/", project_list),
    path("api/", include("general.urls")),
    path("", include(ssr_patterns)),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)