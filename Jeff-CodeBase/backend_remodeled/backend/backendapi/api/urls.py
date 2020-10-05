from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views
from .views import EventsView , EventList 
from django.conf.urls.static import static
from django.conf import settings

#registering all Viewset paths with the router
router = routers.DefaultRouter()
router.register('events', views.EventsView, 'api')

#registering all paths
urlpatterns = [
    path('', include(router.urls)),
    path('api/eventslist/', EventList.as_view(), name='eventslist'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)