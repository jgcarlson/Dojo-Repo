# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class PostManager(models.Manager):
    def validate_post(self, data):
        if data['note_title'] == '':
            errors.append('Nope.')
            return errors
        elif data['note_text'] == '':
            errors.append('Nope.')
            return errors
        else:
            posted = Post.objects.create(
                title=data['note_title'], text=data['note_text'])
            return posted['id']


class Post(models.Model):
    title = models.CharField(max_length=45)
    text = models.TextField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = PostManager()
