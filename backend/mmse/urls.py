from django.urls import path, include
from .views import LoginView, save_survey_response
from rest_framework.routers import DefaultRouter
from .views import ContactViewSet
from .views import AssessmentResponseCreateView,PatientViewSet
from .views import PatientViewSet
from . import views
from .views import UserCreateAPIView
from .views import QuestionnaireResponseViewSet

router = DefaultRouter()
router.register(r'contact', ContactViewSet)
router.register(r'responses', QuestionnaireResponseViewSet)
router.register(r'patients', PatientViewSet)

urlpatterns = [
     path('save-survey-response/', save_survey_response, name='save-survey-response'),
     path('login/', LoginView.as_view(), name='login'),
     path('', include(router.urls)),
     path('api/patients/', UserCreateAPIView.as_view(), name='user_create'),
     path('api/responses/', AssessmentResponseCreateView.as_view(), name='response-create'),
]