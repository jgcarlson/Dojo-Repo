# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .models import Post
from django.shortcuts import render
from django.http import HttpResponse
import json

# Create your views here.


def index(request):
    context = {
        'posts': Post.objects.all(),
    }
    return render(request, 'notes_app/index.html')


def post(request):
    if request.method == 'POST':
        data = request.POST.copy()
        result = Post.objects.validate_post(data)
        if isinstance(result, int):
            context = {

            }
    return HttpResponse()
