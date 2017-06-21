# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Course

# Create your views here.


def index(request):
    courses = Course.objects.all()
    context = {
        'courses': courses
    }
    return render(request, 'courses_app/index.html', context)


def process(request):
    Course.objects.create(
        name=request.POST['name'], description=request.POST['description'])
    return redirect('/')


def delete(request):
    Course.objects.get(id=request.POST['delete']).delete()
    return redirect('/')
