from django.urls import path, include
from api.viewers import StudentViewSet, AdminViewSet, DoctorViewSet, InstructorViewSet 
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'student', StudentViewSet)
router.register(r'admin', AdminViewSet)
router.register(r'doctor', DoctorViewSet)
router.register(r'instructor', InstructorViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
