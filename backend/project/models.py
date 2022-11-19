from django.db import models


class Gallery(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    cover_image = models.ImageField(upload_to="project_images+{self.name}/")
    gallery = models.ManyToManyField("Gallery", related_name="projects", blank=True)
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

    # on save change the gallery image location to inside the project folder
    def save(self, *args, **kwargs):
        if self.id:
            try:
                for image in self.gallery.images.all():
                    image.image = f"project_images+{self.name}/{image.image}"
            except AttributeError:
                pass
        super().save(*args, **kwargs)
