# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from .models import User, Profile
from django.shortcuts import render, redirect, HttpResponse

# Create your views here.


def index(request):
    return render(request, 'stinder_app/index.html')


def register(request):
    data = request.POST.copy()
    fate = User.objects.validate_user(data)
    if isinstance(fate, int):
        request.session['user'] = fate
        return redirect('/about_me')
    else:
        for errors in fate:
            messages.add_message(request, messages.ERROR,
                                 errors, extra_tags='danger')
        return redirect('/')


def about_me(request):
    if 'user' in request.session:
        return render(request, 'stinder_app/about_me.html')
    else:
        return redirect('/')


def login(request):
    data = request.POST.copy()
    fate = User.objects.login(data)
    print 'good'
    if isinstance(fate, int):
        request.session['user'] = fate
        print 'goodddd'
        return render(request, 'stinder_app/about_me.html')
    else:
        print 'bad'
        for errors in fate:
            messages.add_message(request, messages.ERROR,
                                 errors, extra_tags='danger')
        return redirect('/')
