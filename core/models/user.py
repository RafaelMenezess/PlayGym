from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    """Abstract class, represents a user."""

    is_student = models.BooleanField(default=False)
    is_instructor = models.BooleanField(default=False)
    is_doctor = models.BooleanField(default=False)
