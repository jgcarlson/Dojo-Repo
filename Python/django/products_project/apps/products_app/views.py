# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from models import Product
from django.shortcuts import render, HttpResponse

# Create your views here.

# name, description, weight, price, cost, category


def index(request):
    product1 = Product(name='red truck', description='A moderately priced car.',
                       weight='1700', price='12000', cost='7000', category='car')
    product2 = Product(name='green car', description='An expensive car.',
                       weight='2100', price='70000', cost='34000', category='car')
    product3 = Product(name='purple truck', description='An inexpensive truck.',
                       weight='2000', price='1500', cost='1100', category='truck')
    context = {
        'product1': product1,
        'product2': product2,
        'product3': product3
    }
    for item in context:
        print ('*') * 50
        print context[item].name
        print context[item].description
        print context[item].weight
        print context[item].price
        print context[item].cost
        print context[item].category
    return render(request, 'products_app/index.html')
