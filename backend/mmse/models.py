from django.db import models
from django.contrib.auth.models import AbstractUser

class SurveyResponse(models.Model):
    question_1 = models.IntegerField()
    question_2 = models.IntegerField()
    question_3 = models.IntegerField()
    question_4 = models.IntegerField()
    question_5 = models.IntegerField()
    question_6 = models.IntegerField()
    question_7 = models.IntegerField()
    question_8 = models.IntegerField()
    question_9 = models.IntegerField()
    question_10 = models.IntegerField()
    question_11 = models.IntegerField()
    question_12 = models.IntegerField()


class Contact(models.Model):
    email = models.CharField(max_length=100)
    message= models.TextField(max_length=500) 
    
class Patient(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    
    
    def __str__(self):
        return self.name
    
    
    
class QuestionnaireResponse(models.Model):
    user = models.ForeignKey(Patient, on_delete=models.CASCADE)
    responses = models.JSONField()  # Storing responses as JSON
    created_at = models.DateTimeField(auto_now_add=True)
    
class AssessmentResponse(models.Model):
    score = models.IntegerField()
    result_comment = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.score} - {self.result_comment}'