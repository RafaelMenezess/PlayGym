from django.db import models


class StudentSchedule(models.Model):
    schedule_date = models.DateField()
    schedule_time = models.TimeField()
    student = models.ForeignKey(
        "Student",
        on_delete=models.CASCADE,
    )

    class Meta:
        db_table = "student_schedule"
