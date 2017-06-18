# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
import random

# Create your views here.
VALUES = ['Prefect’s bathroom',
          'Trelawney',
          'veela',
          'squashy',
          'armchairs,',
          'SPEW:',
          'Elemental',
          'Law',
          'Transfiguration.',
          'Magic',
          'Nagini',
          'bezoar,',
          'Hippogriffs',
          'Headless Hunt',
          'giant squid',
          'petrified.',
          'Beuxbatons',
          'flying',
          'half-blood',
          'Great Hall',
          'aurors',
          'Minerva',
          'McGonagall',
          'Polyjuice Potion.',
          'Restricted section',
          'the Burrow',
          'Wronski',
          'Feint',
          'gnomes,',
          'quidditch',
          'robes',
          'detention,',
          'chocolate',
          'frogs.',
          'Errol',
          'parchment',
          'knickerbocker',
          'glory',
          'Avada Kedavra',
          'Shell',
          'Cottage',
          'beaded',
          'bag',
          'portrait',
          'vulture-hat',
          'Twin',
          'cores,',
          'Aragog',
          'crimson',
          'gargoyles',
          'Room of Requirement',
          'counter-clockwise',
          'Shrieking',
          'Shack.',
          'Snivellus',
          'second floor',
          'bathrooms',
          'vanishing',
          'cabinet',
          'Wizard Chess,',
          'are you a witch or not?',
          'Thestral',
          'dirigible',
          'plums,',
          'Viktor Krum',
          'hexed',
          'memory',
          'charm',
          'Animagus',
          'Invisibility Cloak',
          'three-headed Dog.',
          'Half-Blood Prince',
          'Invisibility Cloak',
          'cauldron',
          'cakes,',
          'hiya, Harry!',
          'Basilisk',
          'venom',
          'Umbridge',
          'swiveling',
          'Levicorpus,',
          'nitwit',
          'blubber',
          'oddment',
          'tweak',
          'Chasers',
          'Winky',
          'quills',
          'The Boy Who Lived',
          'bat',
          'spleens',
          'cupboard under the stairs',
          'flying motorcycle.',
          'Sirius Black',
          'Holyhead',
          'Harpies,',
          'Floating candles',
          'Sir Cadogan',
          'three',
          'hoops',
          'disciplinary hearing.',
          'Grindlewald',
          'pig’s',
          'tail',
          'Sorcerer\'s',
          'Stone',
          'biting',
          'teacup.',
          'Side-along',
          'dragon-scale',
          'suits',
          'Filch',
          '20 points, Mr. Potter.']
container = []


def index(request):
    return render(request, 'surprise_app/index.html')


def process(request):
    container[:] = []
    try:
        num = int(request.POST['choice'])
        for each in range(1, num + 1):
            x = random.randrange(1, 113)
            container.insert(0, '<h3>' + VALUES[x] + '</h3>')
        return redirect('/results')
    except ValueError:
        return redirect('/')


def results(request):
    dic = {'container': container}
    return render(request, 'surprise_app/results.html', dic)
