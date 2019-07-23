from django.shortcuts import render
from django.http import HttpResponse

def register(request):
    return render(request, 'games_platform/register.html')
    
