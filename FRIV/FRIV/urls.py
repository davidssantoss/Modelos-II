from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('games_platform/', include('games_platform.urls')),
    path('admin/', admin.site.urls),
]