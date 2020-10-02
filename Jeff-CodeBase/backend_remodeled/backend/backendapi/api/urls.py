from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views
from .views import EventsView , EventList #, EventsDetailView, EventsCreateView, EventsDestroyView, EventsUpdateView
from django.conf.urls.static import static
from django.conf import settings

#registering all Viewset paths with the router
router = routers.DefaultRouter()
router.register('events', views.EventsView, 'api')

#registering all paths
urlpatterns = [
    path('', include(router.urls)),
    path('api/eventslist/', EventList.as_view(), name='eventslist'),
    #path('api/eventscreate/', EventsCreateView.as_view(), name='eventscreate'),
    #path('api/eventsdestroy/', EventsDestroyView.as_view(), name='eventsdestroy'),
    #path('api/eventsupdate/', EventsUpdateView.as_view(), name='eventsupdate'),
   # path('api/eventsdetail/', EventsDetailView.as_view(), name='eventsdetail')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)