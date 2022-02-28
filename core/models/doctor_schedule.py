from django.db import models


class DoctorSchedule(models.Model):
    schedule_date = models.DateField()
    schedule_time = models.TimeField()
    doctor = models.ForeignKey(
        "Doctor",
        on_delete=models.CASCADE,
    )
    student = models.ForeignKey(
        "Student",
        on_delete=models.CASCADE,
    )

    class Meta:
        db_table = "doctor_schedule"
