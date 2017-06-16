# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

# Create your views here.


def index(request):
    print 'This is the index function from views in portfolio_app.'
    return render(request, 'portfolio_app/index.html')


def testimonials(request):
    print 'This is the testimonials function from views in portfolio_app.'
    return render(request, 'portfolio_app/testimonials.html')
