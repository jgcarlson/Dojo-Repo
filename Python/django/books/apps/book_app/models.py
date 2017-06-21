# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import datetime

# Create your models here.


class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author)
    published = models.DateField(default=datetime.date.today)
    in_print = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
