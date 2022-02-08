from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin


class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):

        if not email:
            raise ValueError(_('중복된 이메일 주소입니다.'))
        email = self.normalize_email(email)

        user = self.model(
            email = email,
            **extra_fields
        )

        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.model(
            email = email
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.set_password(password)
        user.save(using=self._db)

        return user



class CustomUser(AbstractBaseUser, PermissionsMixin):
    objects = CustomUserManager()

    class Meta:
        verbose_name = '사용자'
        verbose_name_plural = '사용자 그룹'

    email = models.EmailField(_('email address'), unique=True)
    phone_no = models.CharField(db_column='phone_no', null=True, max_length=100, default='')
    name = models.CharField(db_column='name', max_length=100, blank=True, null=True)
    user_type = models.CharField(db_column='user_type', max_length=100, blank=True, null=True)
    profile_image = models.ImageField(blank=True, null=True, upload_to="profile_image")

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    date_joined = models.DateTimeField(verbose_name='date_joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last_login', auto_now=True)

    # permission
    is_admin = models.BooleanField(default=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    is_supueruser = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.email