# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect, HttpResponse
import random

# Create your views here.

actions = []


def index(request):
    if not 'gold' in request.session:
        request.session['gold'] = 0
    info = {'actions': actions}
    return render(request, 'ninja_app/index.html', info)


def process_money(request):
    if 'farm' in request.POST:
        gold = random.randrange(10, 21)
        request.session['gold'] = request.session['gold'] + gold
        actions.insert(
            0, '<p class="green">Went to a farm, got ' + str(gold) + ' gold!</p>')
        print actions
    if 'cave' in request.POST:
        gold = random.randrange(5, 11)
        request.session['gold'] = request.session['gold'] + gold
        actions.insert(
            0, '<p class="green">Went to a cave, got ' + str(gold) + ' gold!</p>')
    if 'house' in request.POST:
        gold = random.randrange(2, 6)
        request.session['gold'] = request.session['gold'] + gold
        actions.insert(
            0, '<p class="green">Went to a house, got ' + str(gold) + ' gold!</p>')
    if 'casino' in request.POST:
        gold = random.randrange(-50, 51)
        request.session['gold'] = request.session['gold'] + gold
        if gold >= 0:
            actions.insert(
                0, '<p class="green">Went to a casino, got ' + str(gold) + ' gold!</p>')
        else:
            actions.insert(
                0, '<p class="red">Went to a casino, lost ' + str(gold) + ' gold.... Ouch!</p>')

    return redirect('/')
