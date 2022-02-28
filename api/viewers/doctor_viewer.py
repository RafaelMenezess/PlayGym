from rest_framework import permissions
from core.models import Doctor
from api.serializers import DoctorSerializer
from api.viewers.custom_model_view_set import CustomModelViewSet


class DoctorViewSet(CustomModelViewSet):
    """List all User, or create a new User."""

    queryset = Doctor.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = DoctorSerializer
