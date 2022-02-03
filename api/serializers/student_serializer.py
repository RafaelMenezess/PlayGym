from rest_framework import serializers
from core.models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('name', 'email', 'cpf', 'RA', 'birthday', 'rg', 'active', 'password')
