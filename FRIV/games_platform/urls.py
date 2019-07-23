from django.urls import path

from . import views

app_name = 'games_platform'
urlpatterns = [    
    path('', views.MenuView.as_view(), name = 'menu'),
    path('register', views.register, name = 'register'),
    path('login', views.login, name = 'login'),
    path('Arkanoid', views.arkanoid, name = 'arkanoid'),
    path('CarGame', views.car_game, name = 'car_game'),
    path('Chicken', views.chicken, name = 'chicken'),
    path('CrossyRoad', views.crossyroad, name = 'crossyroad'),
    path('HeadGame', views.head_game, name = 'head_game'),
    path('Penguin', views.penguin, name = 'Penguin'),
    path('ShipGame', views.ship_game, name = 'ship_game'),
    path('Snake', views.snake, name = 'snake'),
]
