from events_api.models import Admin_eventspage
from rest_framework import viewsets, permissions
from .serializers import Admin_eventspageSerializer

#ViewSet
class Admin_eventspageViewset(viewsets.ModelViewSet):
    queryset = Admin_eventspage.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = Admin_eventspageSerializer