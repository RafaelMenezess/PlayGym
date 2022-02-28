from dj_rest_auth.registration.views import RegisterView
from core.serializers import DoctorRegistrationSerializer
from rest_framework import permissions


class DoctorRegistrationView(RegisterView):
    """List all User, or create a new User."""

    permission_classes = [permissions.AllowAny]
    serializer_class = DoctorRegistrationSerializer

    def get_queryset(self):
        pass
