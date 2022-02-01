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
        fields = '__all__'