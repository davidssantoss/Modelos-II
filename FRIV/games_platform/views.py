from django.shortcuts import render
from django.http import HttpResponse
from . import models

def register(request):
    if (request.method == 'POST'):
        username = request.POST['username']
        name = request.POST['name']
        last_name = request.POST['last_name']        
        player = models.Player.objects.filter(pk = username) 
        print(player.exists())
    return render(request, 'games_platform/register.html')
    
