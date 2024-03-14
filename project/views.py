from django.http import JsonResponse
from django.shortcuts import render

from project.models import Project


def project_list(request):
    projects = Project.objects.all()
    return JsonResponse(
        {
            "projects": [
                {
                    "id": project.id,
                    "title": project.title,
                    "description": project.description,
                    "cover_image": f"http://autumn000.pythonanywhere.com{project.cover_image.url}",
                    # "gallery": [
                    #     {
                    #         "id": image.id,
                    #         "name": image.name,
                    #         "image": image.image.url(),
                    #     }
                    #     for image in project.gallery.all()
                    # ],
                    "link": project.link,
                }
                for project in projects
            ]
        }
    )
