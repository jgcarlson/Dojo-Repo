# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
import nltk
from . import definitions
# import nlp
# Create your views here.


def index(request):
    if not 'context' in request.session:
        request.session['context'] = []
    else:
        request.session['context'] = []
    print request.session['context']
    return render(request, 'nltk_app/index.html')


def process(request):
    user_input = request.POST['user-form']
    tokens = nltk.word_tokenize(user_input)
    tagged = nltk.pos_tag(tokens)
    print tagged
    for item in tagged:
        print item
        request.session['context'] += [item[0] +
                                       ' = ' + definitions.pos(item[1])]
    print 'something'
    print request.session['context']
    return redirect('/results')


def results(request):
    print 'something else'
    print request.session['context']
    context = {
        'results': request.session['context']
    }
    return render(request, 'nltk_app/results.html', context)
