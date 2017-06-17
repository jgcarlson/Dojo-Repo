# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.


def index(request):
    return render(request, 'survey_app/index.html')


def results(request):
    if request.method == 'POST':
        name = request.POST['name']
        location = request.POST['location']
        language = request.POST['language']
        comments = request.POST['comments']
        data = {
            'name': name,
            'location': location,
            'language': language,
            'comments': comments
        }
        return render(request, 'survey_app/results.html', data)
    else:
        return redirect('/')
