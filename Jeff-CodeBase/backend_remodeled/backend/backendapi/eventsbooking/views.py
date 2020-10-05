from django.shortcuts import render
from  django.db import models
from django.shortcuts import render
from rest_framework import viewsets,generics,permissions
from rest_framework.response import Response
from .serializers import BookingSerializer
from .models import Booking
from api.serializers import EventsSerializer
from api.models import Events
from django.http import HttpResponse
#from from django.db.models import UserAccess, User
import datetime
from django.shortcuts import get_object_or_404
from django.db.models import F
from rest_framework.permissions import IsAuthenticated, IsAdminUser

# Create your views here.

class BookingView(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def post(self, request):
        file_model = Booking()

        _, file = request.FILES.popitem()
        file = file[0] # get the file from MultiValueDict
        file_model.file = file
        file_model.save()

        return HttpResponse(content_type='text/plain', content='Booking added')

    session = (
        ('Morning', 'Morning'),
        ('Mid-morning', 'Midmorning'),
        ('Afternoon', 'Afternoon'),
    )

    session = models.CharField(verbose_name='session', max_length=50,
                            choices=session, default='')

    def __str__(self):
        return str(self.user) + " For " + str(self.event)

    class Meta:
        unique_together = ('events', 'session', 'user')

class BookedEvents(generics.GenericAPIView):

    queryset = Booking.objects.all()    
    #permission_classes = (IsAdminUser, IsAuthenticated)
    serializer_class = BookingSerializer
    def get(self,request,format = None):
        booking = Booking.objects.all()
        count = booking.__len__()
        serializer = BookingSerializer(booking,many = True)
        return Response({"count":count, "data":serializer.data})

class UserBookedEvents(viewsets.ModelViewSet):

    def get(self, request, user, format=None):
        try:
            userbook = Account.objects.get(user=user)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        querying = userbook.booking_set.all().values_list("events", flat=True)
        querying = Events.objects.filter(user__in=querying)
        events = EventsSerializer(querying, many=True)
        return Response(events.data)

class EventAttendees(viewsets.ModelViewSet):
    
    def get(self, request, id):
        print(id)
        events = Events.objects.get(pk=pk)
        bookingset = Booking.objects.filter(events = events)
        eventsSer = BookingSerializer(bookingset, many=True)
        queryset = Events.objects.all()
        return Response(eventsSer.data)