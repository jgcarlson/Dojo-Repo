# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.


def index(request):
    print "Hello, I am your first request!"
    return render(request, 'HelloWorldApp/index.html')
