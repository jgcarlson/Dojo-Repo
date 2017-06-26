# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
import bcrypt
# Create your models here.


class UserManager(models.Manager):
    def validate_user(self, data):
        errors = []
        if len(data['name']) == 0:
            errors.append('Please enter your name.')
        elif len(data['name']) < 2:
            errors.append('Your name must be longer.')
        if len(data['alias']) == 0:
            errors.append('Please enter an alias.')
        elif len(data['alias']) < 2:
            errors.append('Your alias must be longer.')
        elif User.objects.filter(alias=data['alias']):
            errors.append('That alias is already in use.')
        try:
            email = data['email']
            email = email.lower().strip()
            if email != '':
                if not validate_email(email):
                    errors.append('Please enter a valid email address.')
                elif User.objects.filter(email=email):
                    errors.append(
                        'This email is already associated with another account.')
        except validate_email.ValidationError:
            errors.append('Please enter a valid email address.')
        if len(data['password']) < 8:
            errors.append('Your password must be at least 8 characters.')
        if data['password'] == data['confirm']:
            password = data['password']
        else:
            errors.append('Your passwords didn\'t match.')
        if errors == 0:
            password = bcrypt.hashpw(password.encode(), gensalt())
            user = User.objects.create(
                name=data['name'], alias=data['alias'], email=email, password=password)
            return user.id
        else:
            return errors

    # humanize -- easier time stuff


class User(models.Model):
    name = models.CharField(max_length=45)
    alias = models.CharField(max_length=45, default="Anonymous")
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()


class BookManager(models.Manager):
    pass


class Book(models.Model):
    pass


class AuthorManager(models.Manager):
    pass


class Author(models.Model):
    pass


class ReviewManager(models.Manager):
    pass


class Review(models.Model):
    pass
