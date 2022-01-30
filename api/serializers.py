from rest_framework import serializers
from .models import goods_design
from django.contrib.auth.models import User

        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']


class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = goods_design
        fields = ['id', 'info_id', 'image_path', 'image_selected', 'created_at', 'delete_flag']