from django.urls import path, include
from .views import LoginView, save_survey_response
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet

router = DefaultRouter()
router.register(r'contact', ContactViewSet)

urlpatterns = [
     path('save-survey-response/', save_survey_response, name='save-survey-response'),
     path('login/', LoginView.as_view(), name='login'),
     path('', include(router.urls)),
]