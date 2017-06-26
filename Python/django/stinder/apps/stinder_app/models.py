# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import datetime
import when
from dateutil.parser import parse
import bcrypt
from django.core.exceptions import ObjectDoesNotExist
from pyzipcode import ZipCodeDatabase
# Create your models here.


class UserManager(models.Manager):
    def validate_user(self, data):
        errors = []
        if len(data['username']) < 2:
            errors.append('Your username needs to be longer.')
        try:
            if User.objects.get(username=data['username']):
                pass
        except ObjectDoesNotExist:
            pass
        if len(data['first_name']) < 2:
            errors.append('Please enter a valid first name.')
        if len(data['last_name']) < 2:
            errors.append('Please enter a valid last name.')
        try:
            if data['email'] == User.objects.get(username=data['email']).email:
                errors.append(
                    'That email address is already associated with another account.')
        except ObjectDoesNotExist:
            pass
        if parse(data['dob']) > when.past(years=18):
            errors.append('You must be at least 18 years old to sign up.')
        if len(data['password']) < 8:
            errors.append('Your password must be at least 8 characters long.')
        if data['password'] != data['confirm']:
            errors.append('Your passwords don\'t match.')
        if len(errors) == 0:
            password = data['password'].encode()
            hashed = bcrypt.hashpw(password, bcrypt.gensalt())
            user = User.objects.create(username=data['username'], first_name=data['first_name'],
                                       last_name=data['last_name'], email=data['email'], dob=parse(data['dob']), password=hashed)
            return user.id
        else:
            return errors

    def login(self, data):
        errors = []
        zcdb = ZipCodeDatabase()
        zipcode = zcdb[54115]
        print zipcode.zip
        print zipcode.city
        print zipcode.state
        print zipcode.longitude
        print zipcode.latitude
        print zcdb.find_zip(city="Oshkosh")
        print [z.zip for z in zcdb.get_zipcodes_around_radius('54901', 10)]
        try:
            user = User.objects.get(username=data['login-username'])
            if data['login-username'] == user:
                print 'good'
        except ObjectDoesNotExist:
            print 'not exist'
            errors.append('Try again.')
        except:
            errors.append('Try again.')
        if len(errors) == 0:
            if user.password == bcrypt.hashpw(data['login-password'].encode(), user.password.encode()):
                return user.id
            else:
                errors.append('Try again.')
                return errors
        else:
            return errors


class User(models.Model):
    username = models.CharField(max_length=45)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(max_length=255)
    dob = models.DateField(default='1900-01-01')
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return self.username


class ProfileManager(models.Manager):
    def validate_profile(self, data):
        zcdb = ZipCodeDatabase()
        zipcode = zcdb[54115]
        print zipcode.zip
        print zipcode.city
        print zipcode.state
        print zipcode.longitude
        print zipcode.latitude
        print zcdb.find_zip(city="Oshkosh")
        print [z.zip for z in zcdb.get_zipcodes_around_radius('54901', 10)]


class Profile(models.Model):
    location = models.IntegerField(max_length=5)
    user = models.OneToOneField(User, related_name='profile')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ProfileManager()

    def __str__(self):
        return '%s\'s profile' % (user.username)


'''
    TODO
    # Rate study buddy
    # Demographics: Distance, gender, age
    # Level of talkativeness (self + desired in others)
    # Areas of interest + level of caring about others interests
'''
