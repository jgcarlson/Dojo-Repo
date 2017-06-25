# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class UserManager(models.Manager):
    pass


class User(models.Model):
    username = models.CharField(max_length=45)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    dob = models.DateField(default='1900-01-01')
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return self.username


class ProfileManager(models.Manager):
    pass


class Profile(models.Model):
    user = models.OneToOneField(User, related_name='profile')
    objects = ProfileManager()

    def __str__(self):
        return '%s %s\'s profile' % (user.first_name, user.last_name)


'''
    TODO
    # Rate study buddy
    # Demographics: Distance, gender, age
    # Level of talkativeness (self + desired in others)
    # Areas of interest + level of caring about others interests


'''
