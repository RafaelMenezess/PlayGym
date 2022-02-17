from datetime import date
from django.db import models


class Schedule(models.Model):
    date = models.DateField()
    time = models.TimeField()
    student_ra = models.CharField(max_length=20)
