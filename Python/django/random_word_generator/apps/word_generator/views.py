# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse
import random
# Create your views here.


def index(request):
    if 'count' in request.session:
        print 'count already in session'
        print request.session['count']
    else:
        request.session['count'] = 1
    if request.method == 'POST':
        word = ''.join(random.choice('abcdefghijklmnopqrstuvwxyz')
                       for i in range(14))
        data = {'random_word': word}
        request.session['count'] = request.session['count'] + 1
        return render(request, 'word_generator/index.html', data)
    else:
        return render(request, 'word_generator/index.html')
