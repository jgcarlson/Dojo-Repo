# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re

# Create your models here.


class UserManager(models.Manager):
    errors = []

    def validate(self, data):
        if not data['first_name'].isalpha() and len(data['first_name']) > 1:
            errors.append('The first name you entered is not long enough.')
        if not data['last_name'].isalpha() and len(data['last_name']) > 1:
            errors.append('The last name you entered is not long enough.')
        if not re.match(r'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)', data['email']):
            errors.append(
                'Your email address appears to be formatted incorrectly.')
        if not data['password'] == data['confirm']:
            errors.append(
                'Your passwords did not match.')
        if len(errors) == 0:
            user = User.objects.create(
                first_name=data['first_name'], last_name=data['last_name'], email=data['email'], password=data['password'])
            return user.id
        else:
            return errors


class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    dob = models.DateField(default=1990 - 01 - 01)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
