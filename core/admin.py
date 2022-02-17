from django.contrib import admin
from core.models import CustomUser, Student, Instructor, Doctor, Admin


admin.site.register(CustomUser)
admin.site.register(Student)
admin.site.register(Instructor)
admin.site.register(Doctor)
admin.site.register(Admin)
