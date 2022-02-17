from rest_framework import permissions
from rest_framework import viewsets

from api.serializers import AdminSerializer
from core.models import Admin


class AdminViewSet(viewsets.ModelViewSet):
    """List all User, or create a new User."""

    queryset = Admin.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = AdminSerializer
