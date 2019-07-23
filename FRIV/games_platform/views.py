from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from . import models

def index(request):
    return render(request, 'games_platform/index.html')

def register(request):
    if (request.method == 'POST'):
        usernameDB = request.POST['username']                        
        if (models.Player.objects.filter(pk = usernameDB).exists()):
            return render(request, 'games_platform/register.html', {'error_message':'el usuario ya existe'})
        else:
            models.Player(username = usernameDB, name = request.POST['name'], last_name = request.POST['last_name']).save()          
            return render(request, 'games_platform/register.html')
    else:
        return render(request, 'games_platform/register.html')

def login(request):
    if (request.method == 'POST'):
        usernameDB = request.POST['username']                        
        if (models.Player.objects.filter(pk = usernameDB).exists()):
            return HttpResponse('entrar a plataforma con %s registrado' % usernameDB)
        else:
            return render(request, 'games_platform/login.html', {'error_message': 'el usuario no esta registrado'})
    else:
        return render(request, 'games_platform/login.html')

