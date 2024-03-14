# Generated by Django 4.1.3 on 2022-11-15 07:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_blog_body"),
    ]

    operations = [
        migrations.AddField(
            model_name="blog",
            name="date",
            field=models.DateField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]