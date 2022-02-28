from django.db import models
from datetime import time


class ScheduleConfig(models.Model):
    SCHEDULE_CONFIG_PANDEMIC = models.BooleanField(default=False)
    SCHEDULE_CONFIG_NUMBER_STUDENT_PER_SCHEDULE = models.IntegerField(default=10)
    SCHEDULE_CONFIG_PANDEMIC_SCHEDULES_OPEN = models.TimeField(default=time(8, 0, 0))
    SCHEDULE_CONFIG_PANDEMIC_SCHEDULES_CLOSE = models.TimeField(default=time(22, 0, 0))
