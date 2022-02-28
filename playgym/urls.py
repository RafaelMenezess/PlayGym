"""playgym URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


schema_view = get_schema_view(
    openapi.Info(
        title="PlaGym API",
        default_version="v1",
        description="Descrição do projeto",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

app_name = "core"

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("", schema_view.with_ui("redoc", cache_timeout=0)),
    path("api/register/", include(("core.urls", "core"), namespace="registration")),
    path("api/", include(("api.urls", "api"), namespace="api")),
    path("dj_rest_auth/", include("dj_rest_auth.urls")),
    path("dj_rest_auth/registration/", include("dj_rest_auth.registration.urls")),
    path("token", TokenObtainPairView.as_view(), name="token_obtain_pai"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
