from rest_framework import permissions
from core.models import Student
from api.serializers import StudentSerializer
from rest_framework import viewsets



class StudentViewSet(viewsets.ModelViewSet):
    '''List all User, or create a new User.'''

    queryset = Student.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = StudentSerializer
