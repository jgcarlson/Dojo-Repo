# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect, HttpResponse
from .models import User
from django.contrib import admin

# Create your views here.


def index(request):
    return render(request, 'reg_app/index.html')


def login(request):
    post_data = request.POST
    result = User.objects.login(post_data)
    if isinstance(result, int):
        request.session['user'] = result
        messages.add_message(request, messages.SUCCESS,
                             "Welcome back!<br>You logged in successfully.")
        return redirect('/home')
    else:
        for errors in result:
            messages.add_message(request, messages.ERROR,
                                 errors, extra_tags='danger')
        return redirect('/')
    # Correct login information not working.


def register(request):
    post_data = request.POST
    result = User.objects.validate(post_data)
    if isinstance(result, int):
        request.session['user'] = result
        messages.add_message(request, messages.SUCCESS,
                             'You registered successfully.')
        return redirect('/home')
    else:
        for errors in result:
            messages.add_message(request, messages.ERROR,
                                 errors, extra_tags='danger')
        return redirect('/')


def home(request):
    context = {'users': User.objects.all}
    print context
    return render(request, 'reg_app/home.html', context)
