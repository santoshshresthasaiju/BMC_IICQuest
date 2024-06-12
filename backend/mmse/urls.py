from django.urls import path
from .views import save_survey_response
from .views import LoginView

urlpatterns = [
     path('save-survey-response/', save_survey_response, name='save-survey-response'),
     path('login/', LoginView.as_view(), name='login'),
    
]