# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
import datetime

# Create your views here.


def index(request):
    d = datetime.datetime.now()
    request.session['date'] = d.strftime('%b %d, %Y')
    request.session['time'] = d.strftime('%I:%M %p')
    return render(request, 'time_display/index.html')
