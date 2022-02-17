from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from core.models import Doctor


class DoctorRegistrationSerializer(RegisterSerializer):
    doctor = serializers.PrimaryKeyRelatedField(read_only=True)
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    cpf = serializers.CharField(required=True)
    rg = serializers.CharField(required=False)
    birthday = serializers.DateField(required=True)
    crm = serializers.CharField(required=True)
    password1 = serializers.CharField(
        write_only=True,
        required=True,
        style={"input_type": "password", "placeholder": "Password"},
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={"input_type": "password", "placeholder": "Password"},
    )

    def get_cleaned_data(self):
        data = super(DoctorRegistrationSerializer, self).get_cleaned_data()
        data.update(
            {
                "first_name": self.validated_data.get("first_name"),
                "last_name": self.validated_data.get("last_name"),
                "cpf": self.validated_data.get("cpf"),
                "crm": self.validated_data.get("crm"),
                "rg": self.validated_data.get("rg", ""),
                "birthday": self.validated_data.get("birthday"),
            }
        )
        return data

    def save(self, request):
        user = super(DoctorRegistrationSerializer, self).save(request)
        user.is_doctor = True
        user.save()
        Doctor(
            doctor=user,
            first_name=self.cleaned_data.get("first_name"),
            last_name=self.cleaned_data.get("last_name"),
            cpf=self.cleaned_data.get("cpf"),
            crm=self.cleaned_data.get("crm"),
            rg=self.cleaned_data.get("rg"),
            birthday=self.cleaned_data.get("birthday"),
        ).save()

        return user
