from django.db import models
from django.contrib.auth.hashers import check_password
from passwords.fields import PasswordField
from passwords.validators import (
    DictionaryValidator, LengthValidator, ComplexityValidator)
from datetime import date

# Create your models here

# Events model
class Events(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    event_description = models.CharField(max_length=500, blank=False, null=False)
    speaker = models.CharField(max_length=100, blank=False, null=False)
    start_time = models.TimeField('Start Time', null=True, blank=True)
    end_time = models.TimeField('End Time', null=True, blank=True)
    event_date = models.DateField('Date', null=True)
    Morning = 'Morning'
    MidMorning = 'Mid-Morning'
    Afternoon = 'Afternoon'
    session = models.CharField(max_length=100,
        choices=[
            (Morning, 'Morning'),
            (MidMorning, 'Mid-Morning'),
            (Afternoon, 'Afternoon'),
                ]
    )
    room_capacity = models.PositiveIntegerField(null=True, blank=True)
    events_image = models.ImageField(upload_to='event_images', blank=False)
    count = models.IntegerField(default=0)
    
    def __str__(self):
        return self.title
