from django.db import models
from ckeditor.fields import RichTextField


class Blog(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    body = RichTextField(blank=True, null=True)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    def summary(self):
        return self.description[:100]
