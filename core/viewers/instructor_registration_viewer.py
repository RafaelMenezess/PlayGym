from dj_rest_auth.registration.views import RegisterView
from core.serializers import InstructorRegistrationSerializer
from rest_framework import permissions


class InstructorRegistrationView(RegisterView):
    """List all User, or create a new User."""

    permission_classes = [permissions.AllowAny]
    serializer_class = InstructorRegistrationSerializer

    def get_queryset(self):
        pass
