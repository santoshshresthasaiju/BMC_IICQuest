from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SurveyResponse
from .serializers import SurveyResponseSerializer

@api_view(['POST'])
def save_survey_response(request):
    serializer = SurveyResponseSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


