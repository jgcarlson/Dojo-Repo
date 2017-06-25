# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, HttpResponse, redirect
from .models import User, Secret, Like
from datetime import datetime
# Create your views here.


def index(request):
    return render(request, 'secrets_app/index.html')


def login(request):
    post_data = request.POST
    result = User.objects.login(post_data)
    if isinstance(result, int):
        request.session['user'] = result
        return redirect('/secrets')
    else:
        for errors in result:
            messages.add_message(request, messages.ERROR,
                                 errors, extra_tags='danger login')
        return redirect('/')


def register(request):
    post_data = request.POST
    result = User.objects.register(post_data)
    # bday = datetime.strptime(post_data['dob'], '%Y-%d-%m')
    # print ('*') * 50
    # print post_data['dob']
    # print ('*') * 50
    # print User.objects.calculate_age(bday)
    if isinstance(result, int):
        request.session['user'] = result
        messages.add_message(request, messages.SUCCESS,
                             "You registered successfully!", extra_tags='success')
        return redirect('/secrets')
    else:
        for errors in result:
            messages.add_message(request, messages.ERROR,
                                 errors, extra_tags='danger registration')
        return redirect('/')


def secrets(request):
    context = {
        'user_id': request.session['user'],
        'first_name': User.objects.get(id=request.session['user']).first_name,
        'secrets': Secret.objects.all().order_by('-created_at')
    }
    return render(request, 'secrets_app/secrets.html', context)


def tell_secret(request):
    post_data = request.POST
    result = Secret.objects.validate_secret(post_data)
    if result == 'success':
        return redirect('/secrets')
    else:
        return redirect('/secrets')


def like(request):
    post_data = request.POST.copy()
    post_data['user'] = request.session['user']
    like = Like.objects.validate_like(post_data)
    if like == 'success':
        return redirect('/secrets')
    else:
        for errors in like:
            messages.add_message(request, messages.WARNING,
                                 errors, extra_tags='warning')
        return redirect('/secrets')


def my_secrets(request):
    user = request.session['user']
    context = {
        'filter': Secret.objects.filter(author_id=user).filter(author_id=user)
    }
    return render(request, 'secrets_app/my_secrets.html', context)


def other_secrets(request):
    user = request.session['user']
    context = {
        'filter': Secret.objects.exclude(author_id=user).exclude(author_id=user)
    }
    return render(request, 'secrets_app/other_secrets.html', context)


def best_of(request):
    context = {
        'filter': Secret.objects.all()[:10]}
    return render(request, 'secrets_app/best.html', context)


def logout(request):
    request.session.flush()
    return redirect('/')
