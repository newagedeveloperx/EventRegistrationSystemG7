from django.db import models
from api.models import Events
from accounts.models import Account
from django.conf import settings


#Booking model

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    events = models.ForeignKey(to=Events, on_delete=models.CASCADE)
    session = models.CharField(max_length=100)
    seats = models.IntegerField()

    def __str__(self):
        return str(self.user) + " For " + str(self.events)

    class Meta:
        unique_together = ('events', 'session', 'user')
    


