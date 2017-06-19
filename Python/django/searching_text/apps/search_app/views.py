# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.


def index(request):
    p = open('pandp.txt', 'r')
    contents = p.read()
    print ('*') * 50
    print (contents)
    print ('*') * 50
    return render(request, 'search_app/index.html')
