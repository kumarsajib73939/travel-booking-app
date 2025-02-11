from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns  = [
    path('', views.home_page, name='home'),
    path('booking', views.book_view, name='booking'),
    path('booking/success', views.success_view, name='success_page'),
]