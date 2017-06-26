# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect, HttpResponse
from .models import User, Book, Author, Review

# Create your views here.


def index(request):
    return render(request, 'book_reviewer/index.html')


def home(request):
    return render(request, 'book_reviewer/home.html')


def register(request):
    data = request.POST.copy()
    result = User.objects.validate_user(data)
    if isinstance(result, int):
        request.session['user'] = result
        return redirect('/home')
    else:
        for error in result:
            messages.add_message(request, messages.ERROR,
                                 error, extra_tags='danger')
        return redirect('/')


def login(request):
    return redirect('/home')
