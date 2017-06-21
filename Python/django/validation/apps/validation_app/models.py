# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class UserManager(models.Manager):
    def validate(self, data):
        errors = []
        if not 8 < data['username'] or data['username'] < 27:
            errors.append('Username must be between 8 and 26 characters')
        if len(errors) == 0:
            user = User.objects.create(username=data['username'])
            return user.id
        else:
            return errors

    def __str__(self):
        return self.name


class User(models.Model):
    username = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
