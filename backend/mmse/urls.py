from django.urls import path
from .views import save_survey_response

urlpatterns = [
     path('save-survey-response/', save_survey_response, name='save-survey-response'),
    
]