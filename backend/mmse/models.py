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