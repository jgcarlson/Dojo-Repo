# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import *
from django.shortcuts import render

# Create your views here.


def index(request):
    pnp = Book.objects.create(title='Pride and Prejudice', author='Jane Austen',
                              published='1813-01-28')
    pnpnz = Book.objects.create(title='Pride and Prejudice and Zombies',
                                author='Seth Grahame-Smith', published='2009-04-01')
    ak = Book.objects.create(title='Anna Karenina', author='Leo Tolstoy',
                             published='1870-01-01')
    anka = Book.objects.create(title='Android Karenina', author='Seth Grahame-Smith',
                               published='2010-08-08')
    ss = Book.objects.create(title='Crime and Punishment', author='Fyodor Dostoyevsky',
                             published='1866-01-01')
    return render(request, 'book_app/index.html')
