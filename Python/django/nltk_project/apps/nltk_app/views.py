# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
import nltk
from . import definitions
# import nlp

# Create your views here.


def index(request):
    # sentence = "The quick brown fox"
    # tokens = nltk.word_tokenize(sentence)
    # tagged = nltk.pos_tag(tokens)
    # print tokens
    # print tagged
    # print definitions.pos('NN')
    # for item in tagged:
    #     print item[0] + ' / ' + definitions.pos(item[1])
    return render(request, 'nltk_app/index.html')


def process(request):
    sentence = 'THE QUICK BROWN FOX'
    print ('*') * 50
    print sentence
    print ('*') * 50
    return redirect('/')


def results(request):
    return render(request, 'nltk_app/results.html')
