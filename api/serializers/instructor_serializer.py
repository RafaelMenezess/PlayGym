from rest_framework import serializers
from core.models import Instructor

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = ('name', 'email', 'cpf', 'birthday', 'rg', 'active', 'password', 'cref')