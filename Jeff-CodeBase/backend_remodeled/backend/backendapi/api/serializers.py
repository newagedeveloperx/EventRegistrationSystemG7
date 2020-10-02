from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Events

#Creating serializer classes

#UserSerializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'Username', 'password']

#'FirstName', 'LastName', 'phone_number','Email', 'Date_Of_Birth', 'City'
        #Hashing user password
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    #Overriding the built in method for users
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        #Token generation for users
        Token.objects.create(user=user)
        return user
    
#Events Serializer
class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ('id', 'title', 'speaker', 'start_time', 'end_time', 'event_date', 'session', 'room_capacity', 
        'events_image')
