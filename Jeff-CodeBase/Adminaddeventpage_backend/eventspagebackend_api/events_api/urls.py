from rest_framework import routers
from .api import Admin_eventspageViewset

router =routers.DefaultRouter()
router.register('api/events_api', Admin_eventspageViewset, 'event_api')

urlpatterns = router.urls
