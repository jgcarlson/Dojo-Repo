# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.core.exceptions import MultipleObjectsReturned
import re
from datetime import date
import dateutil
from dateutil.parser import parse
import when
import bcrypt

# Create your models here.


class UserManager(models.Manager):
    # def calculate_age(born):
    #     today = date.today()
    #     return today.year - born.year - ((today.month, today.day) < (born.month, born.day))

    def register(self, data):
        errors = []
        if len(data['username']) < 3:
            errors.append(
                'Username must be at least 3 characters.')
        if data['username'] == User.objects.filter(username=data['username']):
            errors.append(
                'Username is taken.')
        if len(data['first_name']) < 2 or len(data['last_name']) < 2:
            errors.append(
                'The name you entered is too short.')
        if not data['first_name'].isalpha() or not data['last_name'].isalpha():
            errors.append(
                'Your name appears to be formatted incorrectly.')
        if not re.match(r'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)', data['email']):
            errors.append(
                'Your email address appears to be formatted incorrectly.')
        if parse(data['dob']) > when.past(years=13):
            errors.append(
                'You must be at least 13 years old to use this site.')
        if data['password'] != data['confirm']:
            errors.append(
                'The passwords you entered did not match.')
        if len(data['password']) < 8 or len(data['confirm']) < 8:
            errors.append(
                'The password you entered is too short.')
        if len(errors) == 0:
            raw_password = data['password']
            hashed = bcrypt.hashpw(raw_password.encode(), bcrypt.gensalt())
            user = User.objects.create(username=data['username'],
                                       first_name=data['first_name'], last_name=data['last_name'], email=data['email'], dob=data['dob'], password=hashed)
            return user.id
        else:
            return errors

    def login(self, data):
        errors = []
        if len(data['password']) < 8:
            errors.append(
                'Um no. Try again.')
        else:
            try:
                user = User.objects.get(email=data['email'])
                if user.password == bcrypt.hashpw(data['password'].encode(), user.password.encode()):
                    return user.id
                else:
                    errors.append(
                        'Um, no. Try again.')
            except:
                errors.append(
                    'Um no. Try again.')
        return errors


class User(models.Model):
    username = models.CharField(max_length=45)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    dob = models.DateField(default='1900-01-01')
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return self.first_name + ' ' + self.last_name


class SecretManager(models.Manager):
    def validate_secret(self, data):
        if len(data['new-secret']) > 0 and len(data['new-secret']) < 256:
            print data['submit-secret']
            print User.objects.get(id=data['submit-secret'])
            Secret.objects.create(
                message=data['new-secret'], author=User.objects.get(
                    id=int(data['submit-secret'])))
            return 'success'
        else:
            return 'nope'


class Secret(models.Model):
    message = models.CharField(max_length=255)
    author = models.ForeignKey(User, related_name='secret')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = SecretManager()


class LikeManager(models.Manager):
    def validate_like(self, data):
        errors = []
        user = data['user']
        secret_author = Secret.objects.get(id=data['like-button']).author_id
        if secret_author == user:
            errors.append('You can\'t like your own post, bro.')
        try:
            Like.objects.filter(liker=User.objects.get(
                id=data['user'])).get(liked=Secret.objects.get(id=data['like-button']))
            errors.append(
                'Looks like you already liked this post. You must really like it.')
        except:
            Like.objects.create(liker=User.objects.get(
                id=data['user']), liked=Secret.objects.get(id=data['like-button']))
        if len(errors) == 0:
            return 'success'
        else:
            return errors


class Like(models.Model):
    liker = models.ForeignKey(User, related_name='liked_by')
    liked = models.ForeignKey(Secret, related_name='secret_liked')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = LikeManager()

    def __str__(self):
        return str(self.id)
