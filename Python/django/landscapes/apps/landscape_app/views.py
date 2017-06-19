# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages

# Create your views here.


def index(request):
    return render(request, 'landscape_app/index.html')


def landscapes(request, id):
    id = int(id)
    if 1 <= id <= 10:
        img = 'fields'
    elif 11 <= id <= 20:
        img = 'lake'
    elif 21 <= id <= 30:
        img = 'mountains'
    elif 31 <= id <= 40:
        img = 'ocean'
    elif 41 <= id <= 50:
        img = 'pyramids'
    else:
        messages.error(request, 'Number must be between 1 and 50.')
        return redirect('/')
    gallery = {'image': img}
    print img
    print gallery['image']
    return render(request, 'landscape_app/landscapes.html', gallery)
