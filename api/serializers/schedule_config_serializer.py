from rest_framework import serializers
from core.models import ScheduleConfig


class ScheduleConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScheduleConfig
        fields = "__all__"
