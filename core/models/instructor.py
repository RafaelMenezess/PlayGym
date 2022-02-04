from core.models import User
from django.db import models


class Instructor(User):
    cref = models.CharField(max_length=30)

    class Meta:
        db_table = "instructor"
    
     