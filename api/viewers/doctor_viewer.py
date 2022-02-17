from rest_framework import permissions
from core.models import Doctor
from api.serializers import DoctorSerializer
from rest_framework import viewsets


class DoctorViewSet(viewsets.ModelViewSet):
    """List all User, or create a new User."""

    queryset = Doctor.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = DoctorSerializer
