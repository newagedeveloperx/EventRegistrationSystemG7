from rest_framework import serializers
from events_api.models import Admin_eventspage

class Admin_eventspageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin_eventspage
        fields = '__all__'