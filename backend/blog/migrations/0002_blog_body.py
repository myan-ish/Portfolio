# Generated by Django 4.1.3 on 2022-11-13 08:12

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="blog",
            name="body",
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
