# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect, HttpResponse
from .models import User, Book, Author, Review

# Create your views here.


def index(request):
    return render(request, 'book_reviewer/index.html')


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
    data = request.POST.copy()
    result = User.objects.login(data)
    if isinstance(result, int):
        request.session['user'] = result
        return redirect('/home')
    else:
        for error in result:
            messages.add_message(request, messages.ERROR,
                                 error, extra_tags='danger')
        return redirect('/')


def logout(request):
    request.session.flush()
    return redirect('/')


def home(request):
    context = {
        'user': User.objects.get(id=request.session['user']).alias,
        'books': Book.objects.all()
    }
    return render(request, 'book_reviewer/home.html', context)


def add_book(request):
    context = {
        'user': User.objects.get(id=request.session['user']).alias,
        'user_id': User.objects.get(id=request.session['user']).id,
        'authors': Author.objects.all()
    }
    return render(request, 'book_reviewer/addbook.html', context)


def validate_book(request):
    data = request.POST.copy()
    data['user'] = request.session['user']
    result = Book.objects.validate_book(data)
    if isinstance(result, int):
        return redirect('/home')
    else:
        for error in result:
            messages.add_message(request, messages.SUCCESS,
                                 error, extra_tags='danger')
        return redirect('/add_book')
