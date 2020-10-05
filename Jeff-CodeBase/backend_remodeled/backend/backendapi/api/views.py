from django.shortcuts import render
from rest_framework import viewsets, generics
from accounts.models import Account
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView, DestroyAPIView, UpdateAPIView
from django.contrib.auth.models import User
from .serializers import UserSerializer, EventsSerializer
from .models import Events
from django.http import HttpResponse
from rest_framework.response import Response



# Create your views here.

#Events viewset

class EventsView(viewsets.ModelViewSet):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer

    def post(self,request):
        file_model = Events()
        
        _, file = request.FILES.popitem() 
        file = file[0] # get the file from MultiValueDict
        file_model.file = file
        file_model.save()

        return HttpResponse(content_type='text/plain', content='Event added')



class EventList(generics.GenericAPIView):

    queryset = Events.objects.all()    
    #permission_classes = (IsAdminUser, IsAuthenticated)
    serializer_class = EventsSerializer
    def get(self,request,format = None):
        event = Events.objects.all()
        count = event.__len__()
        serializer = EventsSerializer(event,many = True)
        return Response({"count":count, "data":serializer.data})


class EventsDestroyView(DestroyAPIView):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer

#Events Update

class EventsUpdateView(UpdateAPIView):
    queryset = Events.objects.all()
    serializer_class = EventsSerializer


