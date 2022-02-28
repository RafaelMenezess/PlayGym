from rest_framework import permissions
from api.viewers.custom_model_view_set import CustomModelViewSet

from api.serializers import AdminSerializer
from core.models import Admin


class AdminViewSet(CustomModelViewSet):
    """List all User, or create a new User."""

    queryset = Admin.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = AdminSerializer
