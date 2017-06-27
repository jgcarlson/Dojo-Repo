# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse

# Create your views here.


def index(request):
    return render(request, 'lr_app/index.html')


def register(request):
    return redirect('/')


def login(request):
    return redirect('/')
