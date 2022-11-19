from django.http import JsonResponse
from django.shortcuts import render
from .models import Blog


def get_blog(request, id):
    blog = Blog.objects.get(id=id)
    return JsonResponse(
        {
            "id": blog.id,
            "title": blog.title,
            "description": blog.description,
            "body": blog.body,
            "date": blog.date,
        }
    )


def blog_list(request):
    blogs = Blog.objects.all()
    return JsonResponse(
        {
            "blogs": [
                {
                    "id": blog.id,
                    "title": blog.title,
                    "description": blog.description,
                    "body": blog.body,
                    "date": blog.date,
                }
                for blog in blogs
            ]
        }
    )
