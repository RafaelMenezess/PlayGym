from dataclasses import field
from core.models import User
from django.db import models

class Student(User):
    class Meta:
        db_table = "student"
    
    RA = models.CharField(max_length=10)
