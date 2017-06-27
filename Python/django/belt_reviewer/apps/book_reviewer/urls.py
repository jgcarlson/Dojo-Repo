from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^home$', views.home, name='home'),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^add_book$', views.add_book, name='add_book'),
    url(r'^validate_book$', views.validate_book, name='validate_book'),
]
