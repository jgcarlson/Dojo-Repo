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
        img = '<img src="{% static \'landscape_app/images/fields.jpg\' %}" alt="fields">'
    elif 11 <= id <= 20:
        img = '<img src="{% static \'landscape_app/images/fields.jpg\' %}" alt="lake">'
    elif 21 <= id <= 30:
        img = '<img src="{% static "landscape_app/images/fields.jpg" %}" alt="fields">'
    elif 31 <= id <= 40:
        img = '<img src="{% static "landscape_app/images/fields.jpg" %}" alt="fields">'
    elif 41 <= id <= 50:
        img = '<img src="{% static "landscape_app/images/fields.jpg" %}" alt="fields">'
    else:
        messages.error(request, 'Number must be between 1 and 50.')
        return redirect('/')
    gallery = {'img': img}
    print img
    print gallery['img']
    return render(request, 'landscape_app/landscapes.html', gallery)
