# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-20 17:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='in_print',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
    ]
