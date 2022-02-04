from core.models import User


class Admin(User):
    pass

    class Meta:
        db_table = "admin"