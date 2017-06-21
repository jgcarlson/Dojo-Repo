# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import *
from django.shortcuts import render

# Create your views here.


def index(request):
    leo = Author.objects.create(first_name='Leo', last_name='Tolstoy')
    fyodor = Author.objects.create(
        first_name='Fyodor', last_name='Dostoyevsky')
    alex = Author.objects.create(first_name='Alexander', last_name='Pushkin')
    anton = Author.objects.create(first_name='Anton', last_name='Chekhov')
    aleks = Author.objects.create(
        first_name='Aleksander', last_name='Solzhenitsyn')
    return render(request, 'book_app/index.html')
