# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
import bcrypt
import re
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
        if not re.match(r'(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)', data['email']):
            errors.append('Please enter a valid email address.')
        elif User.objects.filter(email=data['email']):
            errors.append(
                'This email is already associated with another account.')
        if len(data['password']) < 8:
            errors.append('Your password must be at least 8 characters.')
        if data['password'] == data['confirm']:
            password = data['password']
        else:
            errors.append('Your passwords didn\'t match.')
        if len(errors) == 0:
            password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            user = User.objects.create(
                name=data['name'], alias=data['alias'], email=data['email'], password=password)
            return user.id
        else:
            return errors

    def login(self, data):
        errors = []
        if len(data['alias']) == 0:
            errors.append('Please enter an alias.')
        else:
            try:
                if data['alias'] == User.objects.get(alias=data['alias']).alias:
                    user = User.objects.get(alias=data['alias'])
            except:
                errors.append('Try again.')
        if len(data['password']) == 0:
            errors.append('Please enter an password.')
        elif user.password == bcrypt.hashpw(data['password'].encode(), user.password.encode()):
            pass
        else:
            errors.append('Try again.')
        if len(errors) == 0:
            return user.id
        else:
            return errors


class User(models.Model):
    name = models.CharField(max_length=45)
    alias = models.CharField(max_length=45, default="Anonymous")
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

    def __str__(self):
        return self.alias


class BookManager(models.Manager):
    def validate_book(self, data):
        errors = []
        if len(data['title']) < 2:
            errors.append('Please enter a longer title.')
        if len(data['author']) < 2:
            errors.append('Please enter an author.')
        if len(data['review']) < 3:
            errors.append('Please enter a review.')
        if data['review'] == '':
            errors.append('Please enter a rating.')
        if len(errors) == 0:
            book = Book.objects.create(title=data['title'], rating=int(
                data['rating']), added_by=User.objects.get(id=data['user']))
            Review.objects.create(
                review_of=book, text=data['review'], created_by=User.objects.get(id=data['user']))
            if Author.objects.filter(name=data['author']).exists():
                author_exists = Author.objects.get(name=data['author'])
                author_exists.book.add(book)
                author_exists.save()
            else:
                book.auth.create(name=data['author'])
                author = Author.objects.get(name=data['author'])
            return book.id
        else:
            return errors


class Book(models.Model):
    title = models.CharField(max_length=45)
    rating = models.IntegerField()
    added_by = models.ForeignKey(User, related_name='added_book')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = BookManager()

    def __str__(self):
        return self.title


class AuthorManager(models.Manager):
    def write_book(self, book):
        self.add(book)
        self.save()
        print 'success'


class Author(models.Model):
    name = models.CharField(max_length=45)
    book = models.ManyToManyField(Book, related_name='auth')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = AuthorManager()

    def __str__(self):
        return self.name


class ReviewManager(models.Manager):
    pass


class Review(models.Model):
    review_of = models.ForeignKey(Book, related_name='review')
    text = models.TextField(max_length=1000)
    created_by = models.ForeignKey(User, related_name='wrote_review')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ReviewManager()
