from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^secrets$', views.secrets),
    url(r'^tell_secret$', views.tell_secret),
    url(r'^logout$', views.logout),
    url(r'^like$', views.like),
    url(r'^secrets/my_secrets$', views.my_secrets),
    url(r'^secrets/other_secrets$', views.other_secrets),
    url(r'^secrets/best_of$', views.best_of),
]
