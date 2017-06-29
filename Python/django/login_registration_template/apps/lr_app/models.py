# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import when
from dateutil.parser import parse
import re
import bcrypt
# Create your models here.


class UserManager(models.Manager):
    def register(self, data):
        errors = []
        # USER NAMES
        if len(data['username']) < 3:
            errors.append('Please enter a longer username.')
        elif User.objects.filter(username=data['username']).exists():
            errors.append('That username is taken.')
        if len(data['first_name']) < 3:
            errors.append('Please enter a longer first name.')
        elif not data['first_name'].isalpha():
            errors.append('Please enter a valid first name.')
        if len(data['last_name']) < 3:
            errors.append('Please enter a longer last name.')
        elif not data['last_name'].isalpha():
            errors.append('Please enter a valid last name.')
        # DOB
        if data['dob'] == '':
            print (data['dob'] == '')
            errors.append('Please add your date of birth.')
        elif parse(data['dob']) > when.past(years=13):
            errors.append('You must be at least 13 to sign up.')
        # EMAIL
        if not re.match(r'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)', data['email']):
            errors.append('Your email address is formatted incorrectly.')
        elif User.objects.filter(email=data['email']).exists():
            errors.append('That email is already in use.')
        # PASSWORD
        if data['password'] != data['confirm']:
            errors.append('Your passwords did not match.')
        elif len(data['password']) < 8:
            errors.append(
                'Your password needs to be at least 8 characters long.')
        if len(errors) == 0:
            password = data['password'].encode()
            hashed = bcrypt.hashpw(password, bcrypt.gensalt())
            user = User.objects.create(username=data['username'], first_name=data['first_name'],
                                       last_name=data['last_name'], dob=data['dob'], email=data['email'], password=hashed)
            return user.id
        else:
            return errors

    def login(self, data):
        errors = []
        if User.objects.filter(username=data['username']).exists():
            user = User.objects.get(username=data['username'])
        else:
            errors.append('Um, no. Try again.')
            return errors
        if len(errors) == 0:
            password = data['password'].encode()
            unhashed = bcrypt.hashpw(password.encode(), user.password.encode())
            if user.password == unhashed:
                return user.id
            else:
                errors.append('Um, no. Try again.')
                return errors
        else:
            errors.append('Um, no. Try again.')
            return errors


class User(models.Model):
    username = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField(default='1900-01-01')
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return self.username
