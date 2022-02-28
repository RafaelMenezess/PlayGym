from rest_framework import serializers
from core.models import DoctorSchedule


class DoctorScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = DoctorSchedule
        fields = "__all__"
