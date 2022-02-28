from datetime import time, date
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist

from api.serializers import StudentScheduleSerializer
from core.models import StudentSchedule, ScheduleConfig


class StudentScheduleView(APIView):
    """List all User, or create a new User."""

    serializer_class = StudentScheduleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        schedule_config = StudentSchedule.objects.all()
        serializer = StudentScheduleSerializer(schedule_config, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        try:
            schedule_config = ScheduleConfig.objects.get(pk=1)
        except ObjectDoesNotExist:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        if schedule_config.SCHEDULE_CONFIG_PANDEMIC:
            gym_open_time = schedule_config.SCHEDULE_CONFIG_PANDEMIC_SCHEDULES_OPEN
            gym_close_time = schedule_config.SCHEDULE_CONFIG_PANDEMIC_SCHEDULES_CLOSE
            student_per_time = schedule_config.SCHEDULE_CONFIG_NUMBER_STUDENT_PER_SCHEDULE
            requested_date = request.data["schedule_date"]
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

            schedule_quantity_per_date = len(
                StudentSchedule.objects.filter(
                    schedule_date=requested_date, schedule_time=requested_time
                )
            )
            if schedule_quantity_per_date == student_per_time:
                return Response(
                    {"message": "Schedule is full for this datetime."},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        serializer = StudentScheduleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class StudentScheduleDetailsView(APIView):
    """List all User, or create a new User."""

    serializer_class = StudentScheduleSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, *args, **kwargs):
        pk = self.kwargs["pk"]
        schedules = StudentSchedule.objects.filter(student=pk)
        serializer = StudentScheduleSerializer(schedules, many=True)
        return Response(serializer.data)
