# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.


def index(request):
    print 'index from app views.'
    return render(request, 'portfolio_app/index.html')


def about(request):
    print 'request from app views'
    return render(request, 'portfolio_app/about.html')


def projects(request):
    print 'projects from app views.'
    return render(request, 'portfolio_app/projects.html')


def testimonials(request):
    print 'testimonials from app views.'
    return render(request, 'portfolio_app/testimonials.html')
