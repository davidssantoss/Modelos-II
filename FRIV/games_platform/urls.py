from django.urls import path

from . import views

app_name = 'games_platform'
urlpatterns = [
    # ex: /platform/
    path('', views.register, name='register')
]
