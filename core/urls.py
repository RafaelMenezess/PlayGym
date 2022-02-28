from django.urls import path

from core.viewers import (
    StudentRegistrationView,
    AdminRegistrationView,
    InstructorRegistrationView,
    DoctorRegistrationView,
)


urlpatterns = [
    path("student", StudentRegistrationView.as_view(), name="register-student"),
    path("admin", AdminRegistrationView.as_view(), name="register-admin"),
    path("doctor", DoctorRegistrationView.as_view(), name="register-doctor"),
    path("instructor", InstructorRegistrationView.as_view(), name="register-instructor"),
]
