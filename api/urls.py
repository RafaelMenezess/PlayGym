from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.viewers import (
    StudentViewSet,
    AdminViewSet,
    DoctorViewSet,
    InstructorViewSet,
)


router = DefaultRouter()
router.register(r"student", StudentViewSet)
router.register(r"admin", AdminViewSet)
router.register(r"doctor", DoctorViewSet)
router.register(r"instructor", InstructorViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
    path("token", TokenObtainPairView.as_view(), name="token_obtain_pai"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
