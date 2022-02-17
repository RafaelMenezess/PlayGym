from rest_framework import permissions
from core.models import Instructor
from api.serializers import InstructorSerializer
from rest_framework import viewsets


class InstructorViewSet(viewsets.ModelViewSet):
    """List all User, or create a new User."""

    queryset = Instructor.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = InstructorSerializer
