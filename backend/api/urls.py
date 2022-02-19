from django.urls import path, include
from .views import DesignViewSet, UploadViewSet, ResultViewSet, SearchViewSet, \
                    RequestViewSet, DesignerViewSet, MypageView
from rest_framework.routers import DefaultRouter
from .import views
from django.conf.urls.static import static
from django.conf import settings


router = DefaultRouter()
router.register('upload', UploadViewSet, basename='upload')
router.register('designs', DesignViewSet, basename='designs')
router.register('results', ResultViewSet, basename='results')
router.register('search', SearchViewSet, basename='search')
router.register('request', RequestViewSet, basename='request')
router.register('designer', DesignerViewSet, basename='designer')

app_name = 'api'


urlpatterns = [
    path('api/', include(router.urls)),
    path('api/mypage/', MypageView.as_view(), name='mypage')
]

