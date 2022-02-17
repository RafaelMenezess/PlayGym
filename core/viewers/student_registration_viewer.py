from dj_rest_auth.registration.views import RegisterView
from core.serializers import StudentRegistrationSerializer
from rest_framework import permissions


class StudentRegistrationView(RegisterView):
    """List all User, or create a new User."""

    permission_classes = [permissions.AllowAny]
    serializer_class = StudentRegistrationSerializer
