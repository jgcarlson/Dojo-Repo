from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^about$', views.about),
    url(r'^testimonials$', views.testimonials),
    url(r'^projects$', views.projects)
]
