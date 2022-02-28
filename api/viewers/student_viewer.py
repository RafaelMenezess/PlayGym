from rest_framework import permissions
from core.models import Student
from api.serializers import StudentSerializer
from api.viewers.custom_model_view_set import CustomModelViewSet


class StudentViewSet(CustomModelViewSet):
    """List all User, or create a new User."""

    queryset = Student.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = StudentSerializer
