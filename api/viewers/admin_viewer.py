from rest_framework import permissions
from core.models import Admin
from api.serializers import AdminSerializer
from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class AdminViewSet(viewsets.ModelViewSet):
    '''List all User, or create a new User.'''

    queryset = Admin.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = AdminSerializer
