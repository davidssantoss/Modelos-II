from django.shortcuts import render
from django.http import HttpResponse
from . import models

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
