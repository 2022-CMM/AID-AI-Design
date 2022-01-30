from django.urls import path, include
from .views import UserViewSet, DesignViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('designs', DesignViewSet, basename='designs')

app_name = 'api'

urlpatterns = [
    path('api/', include(router.urls)),
]

