from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user")
    phone_no = models.CharField(db_column='phone_no', null=True, max_length=100, default='')
    name = models.CharField(db_column='name', max_length=100, blank=True, null=True)
    user_type = models.CharField(db_column='user_type', max_length=100, blank=True, null=True)
    profile_image = models.ImageField(blank=True, null=True, upload_to="profile_image")

    class Meta:
        db_table = "profile"