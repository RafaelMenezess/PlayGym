from core.models import User
from django.db import models


class Doctor(User):
    crm = models.CharField(max_length=30)

    class Meta:
        db_table = "doctor"