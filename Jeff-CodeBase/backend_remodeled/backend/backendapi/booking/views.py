from django.shortcuts import render
from rest_framework import viewsets,generics,permissions
from rest_framework.response import Response
from .serializers import BookingSerializer
from .models import Booking, Session
from api.serializers import EventsSerializer
from api.models import Events
from django.http import HttpResponse
from usermanagement.models import UserAccess,User
import datetime
from django.shortcuts import get_object_or_404
from django.db.models import F
from rest_framework.permissions import IsAuthenticated, IsAdminUser


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

    session = models.CharField(verbose_name='time', max_length=50,
                            choices=times, default='')

    def __str__(self):
        return str(self.user) + " For " + str(self.event)

    class Meta:
        unique_together = ('event', 'time', 'user')

class BookedEvents(generics.GenericAPIView):

    queryset = Booking.objects.all()    
    #permission_classes = (IsAdminUser, IsAuthenticated)
    serializer_class = BookingSerializer
    def get(self,request,format = None):
        booking = Booking.objects.all()
        count = booking.__len__()
        serializer = BookingSerializer(booking,many = True)
        return Response({"count":count, "data":serializer.data})
