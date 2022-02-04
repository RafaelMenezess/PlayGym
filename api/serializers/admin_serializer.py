from rest_framework import serializers
from core.models import Admin

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('name', 'email', 'cpf', 'birthday', 'rg', 'active', 'password', 'is_admin')