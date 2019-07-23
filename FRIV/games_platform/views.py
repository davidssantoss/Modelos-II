from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views import generic
from .models import *

def index(request):
    return render(request, 'games_platform/index.html')

def register(request):
    if (request.method == 'POST'):
        if Player.objects.filter(pk = request.POST['username']).exists():            
            return render(request, 'games_platform/register.html', {'error_message':'el usuario ya existe'.upper()})
        else:            
            Player(username = request.POST['username'], name = request.POST['name'], last_name = request.POST['last_name']).save()
            request.session['username'] = request.POST['username']
            return render(request, "games_platform/menu.html", {'game_list':Game.objects.order_by('name')})
    else:
        return render(request, 'games_platform/register.html')


def login(request):
    if (request.method == 'POST'):        
        if (Player.objects.filter(pk=request.POST['username']).exists()):
            request.session['username'] = request.POST['username']
            return render(request, "games_platform/menu.html", {'game_list':Game.objects.order_by('name')})
        else:
            return render(request, 'games_platform/login.html', {'error_message': 'el usuario no esta registrado'.upper()})
    else:
        return render(request, 'games_platform/login.html')

def arkanoid(request):
    return render(request, 'games_platform/arkanoid.html')

def crossyroad(request):
    return render(request, 'games_platform/crossyroad.html')

def car_game(request):
    return render(request, 'games_platform/car_game.html')

def chicken(request):
    return render(request, 'games_platform/chicken.html')

def head_game(request):
    return render(request, 'games_platform/head_game.html')

def penguin(request):
    return render(request, 'games_platform/penguin.html')

def ship_game(request):
    return render(request, 'games_platform/ship_game.html')

def snake(request):
    return render(request, 'games_platform/snake.html')

class MenuView(generic.ListView):
    template_name = 'games_platform/menu.html'
    context_object_name = 'game_list'

    def get_queryset(self):
        return Game.objects.order_by('name')


