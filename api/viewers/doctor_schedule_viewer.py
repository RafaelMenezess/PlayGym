from datetime import time, date
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from api.serializers import DoctorScheduleSerializer
from core.models import DoctorSchedule, ScheduleConfig


class DoctorScheduleView(APIView):
    """List all User, or create a new User."""

    serializer_class = DoctorScheduleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        doctor_schedule = DoctorSchedule.objects.all()
        serializer = DoctorScheduleSerializer(doctor_schedule, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        try:
            schedule_config = ScheduleConfig.objects.get(pk=1)
        except ObjectDoesNotExist:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        gym_open_time = schedule_config.SCHEDULE_CONFIG_PANDEMIC_SCHEDULES_OPEN
        gym_close_time = schedule_config.SCHEDULE_CONFIG_PANDEMIC_SCHEDULES_CLOSE
        requested_time = time(int(request.data["schedule_time"].split(":")[0]))

        if requested_time < gym_open_time:
            return Response(
                {"message": "Cannot schedule time before gym openning time."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        elif requested_time > gym_close_time:
            return Response(
                {"message": "Cannot schedule time after gym closing time."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = DoctorScheduleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class DoctorScheduleDetailsView(APIView):
    """List all User, or create a new User."""

    serializer_class = DoctorScheduleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, *args, **kwargs):
        pk = self.kwargs["pk"]
        schedules = DoctorSchedule.objects.filter(doctor_id=pk)
        serializer = DoctorScheduleSerializer(schedules, many=True)
        return Response(serializer.data)
