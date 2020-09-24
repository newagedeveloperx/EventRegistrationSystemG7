from django.db import models

# Create your models here.
class Admin_eventspage(models.Model):
    speaker = models.CharField(max_length=100, blank=False)
    topic = models.CharField(max_length=100, blank=False)
    tag_line = models.CharField(max_length=100, blank=False)
    Morning = 'Morning'
    Afternoon = 'Afternoon'
    Evening = 'Evening'
    time = models.CharField(max_length=100,
        choices=[
            (Morning, 'Morning'),
            (Afternoon, 'Afternoon'),
            (Evening, 'Evening'),
]
    )
    room_capacity = models.IntegerField()
    image = models.FileField(upload_to='event_images', blank=True)

