from rest_framework import permissions
from core.models import Instructor
from api.serializers import InstructorSerializer
from api.viewers.custom_model_view_set import CustomModelViewSet


class InstructorViewSet(CustomModelViewSet):
    """List all User, or create a new User."""

    queryset = Instructor.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = InstructorSerializer
