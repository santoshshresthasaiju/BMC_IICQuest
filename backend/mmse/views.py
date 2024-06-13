from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SurveyResponseSerializer
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from .serializers import LoginSerializer
from django.contrib.auth import login
from django.http import JsonResponse
from rest_framework import viewsets,  serializers
from .models import Contact
from .serializers import ContactSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SurveyResponseSerializer
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from .serializers import LoginSerializer
from django.contrib.auth import login
from django.http import JsonResponse
from rest_framework import viewsets
from .models import Patient
from .serializers import PatientSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Patient
import json
from .serializers import QuestionnaireResponseSerializer
from .models import QuestionnaireResponse
from .utils import calculate_scores
from rest_framework import generics
from .models import AssessmentResponse

from .serializers import AssessmentResponseSerializer

class UserCreateAPIView(APIView):
    def post(self, request, format=None):
        # Handle user creation logic here
        return Response(status=status.HTTP_201_CREATED)
    
@api_view(['POST'])
def save_survey_response(request):
    serializer = SurveyResponseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            try:
                user = authenticate(request, username=username, password=password)
                if user is not None:
                    login(request, user)
                    token, _ = Token.objects.get_or_create(user=user)
                    return JsonResponse({'token': token.key}, status=status.HTTP_200_OK)
                else:
                    return JsonResponse({'error': 'Invalid Credentials'}, status=status.HTTP_401_UNAUTHORIZED)
            except Exception as e:
                return JsonResponse({'error': 'An error occurred during authentication'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class QuestionnaireResponseViewSet(viewsets.ModelViewSet):
    queryset = QuestionnaireResponse.objects.all()
    serializer_class = QuestionnaireResponseSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        scores = calculate_scores(instance.responses)
        return Response(scores)
    
class AssessmentResponseCreateView(generics.CreateAPIView):
    queryset = AssessmentResponse.objects.all()
    serializer_class = AssessmentResponseSerializer   
