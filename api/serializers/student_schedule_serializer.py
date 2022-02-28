from rest_framework import serializers
from core.models import StudentSchedule


class StudentScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentSchedule
        fields = "__all__"
