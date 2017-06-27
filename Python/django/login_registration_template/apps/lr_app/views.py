# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect, HttpResponse
from .models import User
# Create your views here.


def index(request):
    return render(request, 'lr_app/index.html')


def register(request):
    data = request.POST.copy()
    result = User.objects.register(data)
    if isinstance(result, int):
        request.session['user'] = result
        return redirect('home')
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
                                 error, extra_tags='danger login')
        return redirect('/')


def home(request):
    context = {
        'user': User.objects.get(id=request.session['user']).first_name
    }
    return render(request, 'lr_app/home.html', context)


def logout(request):
    request.session.flush()
    return redirect('/')
