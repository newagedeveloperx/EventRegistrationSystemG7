from .models import Booking
from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator


class BookingSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=100, blank=False, null=False)
    event_description = serializers.CharField(max_length=500, blank=False, null=False)
    speaker = serializers.CharField(max_length=100, blank=False, null=False)
    start_time = serializers.TimeField('Start Time', null=True, blank=True)
    end_time = serializers.TimeField('End Time', null=True, blank=True)
    event_date = serializers.DateField('Date', null=True)
    Morning = 'Morning'
    MidMorning = 'Mid-Morning'
    Afternoon = 'Afternoon'
    session = serializers.CharField(max_length=100,
        choices=[
            (Morning, 'Morning'),
            (MidMorning, 'Mid-Morning'),
            (Afternoon, 'Afternoon'),
                ]
    )
    room_capacity = serializers.PositiveIntegerField(null=True, blank=True)
    events_image = serializers.ImageField(upload_to='event_images', blank=False)
    count = serializers.IntegerField(default=0)
    
    class Meta:
        model = Events
        fields = ('title', 'speaker', 'start_time', 'end_time', 'event_date', 'session', 'room_capacity', 
        'events_image')