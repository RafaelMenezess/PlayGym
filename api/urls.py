from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.viewers import (
    StudentViewSet,
    AdminViewSet,
    DoctorViewSet,
    InstructorViewSet,
    StudentScheduleView,
    ScheduleConfigView,
    DoctorScheduleView,
    DoctorScheduleDetailsView,
    StudentScheduleDetailsView,
)


router = DefaultRouter()
router.register(r"student", StudentViewSet)
router.register(r"admin", AdminViewSet)
router.register(r"doctor", DoctorViewSet)
router.register(r"instructor", InstructorViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("schedule_config/", ScheduleConfigView.as_view()),
    path("student_schedule/", StudentScheduleView.as_view()),
    path("doctor_schedule/", DoctorScheduleView.as_view()),
    path("doctor_schedule/<int:pk>", DoctorScheduleDetailsView.as_view()),
    path("student_schedule/<int:pk>", StudentScheduleDetailsView.as_view()),
]
