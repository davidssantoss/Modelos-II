from django.urls import path

from . import views

urlpatterns = [
    # ex: /platform/
    path('', views.login, name='login')
]
