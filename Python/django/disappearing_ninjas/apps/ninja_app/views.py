# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.


def index(request):
    return render(request, 'ninja_app/index.html')


def ninjas(request):
    return render(request, 'ninja_app/ninjas.html')


def colors(request, colors):
    if colors == 'red':
        return render(request, 'ninja_app/red.html')
    elif colors == 'orange':
        return render(request, 'ninja_app/orange.html')
    elif colors == 'purple':
        return render(request, 'ninja_app/purple.html')
    elif colors == 'blue':
        return render(request, 'ninja_app/blue.html')
    else:
        return render(request, 'ninja_app/notapril.html')
