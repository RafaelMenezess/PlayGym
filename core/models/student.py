from core.models import User
from django.db import models


class Student(User):
    RA = models.CharField(max_length=10)        
    
    class Meta:
        db_table = "student"
