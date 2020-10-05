from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .import views
from .views import BookedEvents, BookingView, EventAttendees, UserBookedEvents
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth import views as auth_views

#registering all viewsets path with the router
router = routers.DefaultRouter()
router.register('eventsbooking', views.BookingView, 'eventsbooking')



#registering all paths
urlpatterns = [
    path('', include(router.urls)),
    path('eventsbooking/bookingevents/', BookedEvents.as_view(), name='eventbookinglist'),
    path('eventsbooking/bookedevents/', views.UserBookedEvents, name='bookedeventsloist'),
    path('eventsbooking/userbookedevents', views.EventAttendees, name='userbookedevents'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
