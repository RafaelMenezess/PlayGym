from rest_framework import serializers
from core.models import Doctor

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('name', 'email', 'cpf', 'birthday', 'rg', 'active', 'password', 'crm')