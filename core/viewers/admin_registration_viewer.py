from dj_rest_auth.registration.views import RegisterView
from core.serializers import AdminRegistrationSerializer
from rest_framework import permissions


class AdminRegistrationView(RegisterView):
    """List all User, or create a new User."""

    permission_classes = [permissions.AllowAny]
    serializer_class = AdminRegistrationSerializer
