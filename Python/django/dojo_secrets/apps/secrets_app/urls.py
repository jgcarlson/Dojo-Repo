from django.conf.urls import url, include
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^secrets$', views.secrets),
    url(r'^secrets/', include([
        url(r'^my_secrets$', views.my_secrets),
        url(r'^other_secrets$', views.other_secrets),
        url(r'^best_of$', views.best_of),
    ])),
    url(r'^tell_secret$', views.tell_secret),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^like$', views.like),
]
