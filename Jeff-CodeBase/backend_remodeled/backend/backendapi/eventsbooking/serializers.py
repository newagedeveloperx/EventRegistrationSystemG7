from .models import Booking
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from django.contrib import messages

class BookingSerializer(serializers.ModelSerializer):
    model = Booking
    fields = ['user', 'events', 'session']

    class Meta:
        model = Booking
        validators = [
            UniqueTogetherValidator(
                queryset = Booking.objects.all(),
                fields=['user', 'events', 'session']
            )
        ]
    def validate(self, attr):

        session = attr.get("session", None)
        events = attr.get("events", None)

        if events:

            if event.room_capacity <= Booking.objects.filter(events=events, session=session).count():
                raise serializers.ValidationError(
                    {"Event packed" : "No seats are available for this event"})
        return attr