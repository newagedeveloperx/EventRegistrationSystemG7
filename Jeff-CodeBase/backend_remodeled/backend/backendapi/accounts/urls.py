from .views import RegisterAPI, LoginAPIView
from django.urls import path, include
from rest_framework import routers
from knox import views as knox_views

router = routers.DefaultRouter()

urlpatterns = [

    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    #accounts/register/
    path('api/register/', RegisterAPI.as_view(), name='register'),
    #accounts/login/
    path('api/login/', LoginAPIView.as_view(), name='login'),
    #accounts/logout/
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    #accounts/logoutall/
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),

]
