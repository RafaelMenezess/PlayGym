from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from api.serializers import ScheduleConfigSerializer
from core.models import ScheduleConfig


class ScheduleConfigView(APIView):
    """List all User, or create a new User."""

    serializer_class = ScheduleConfigSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        schedule_config = ScheduleConfig.objects.all()
        serializer = ScheduleConfigSerializer(schedule_config, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ScheduleConfigSerializer(data=request.data)
        try:
            schedule_config = ScheduleConfig.objects.get(pk=1)
        except ObjectDoesNotExist:
            schedule_config = None

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        if schedule_config:
            serializer = ScheduleConfigSerializer(schedule_config, data=request.data)
            serializer.is_valid() and serializer.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
