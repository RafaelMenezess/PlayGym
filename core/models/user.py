from turtle import update
from venv import create
from django.db import models
from django import forms


class User(models.Model):
    """Abstract class, represents a user."""
    
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    cpf = models.CharField(max_length=11)
    rg = models.CharField(max_length=30)
    birthday = models.DateField()
    password = models.CharField(max_length=20)
    active = models.BooleanField(default=False)
    create_at = models.DateField(auto_now_add=True)
    update_at = models.DateField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['name']

    def __str__(self):
        """Representation of object, person name."""

        return self.name

    def save(self, *args, **kwargs):
        """Capitalize name attribute and then save."""
        
        self.name = " ".join([i.capitalize() for i in self.name.split()])
        super(User, self).save(*args, **kwargs)
