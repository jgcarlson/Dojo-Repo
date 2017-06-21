# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import User, UserManager

# Create your views here.


def index(request):
    return render(request, 'validation_app/index.html')


def process(request):
    post_data = request.POST
    result = User.objects.validate(post_data)
    if isinstance(result, int):
        request.session['user'] = result
        messages.add_message(request, messages.SUCCESS,
                             'You registered successfully!')
        return redirect('/success')
    else:
        for item in result:
            messages.add_message(request, messages.ERROR, item)
            return redirect('/')


def success(request):
    context = {'usernames': User.objects.all}
    return render(request, 'validation_app/success.html', context)
