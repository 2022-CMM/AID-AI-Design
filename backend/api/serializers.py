from rest_framework import serializers
from .models import goods_design, goods_info, goods_result
from user.models import CustomUser

        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'password']


class UploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = goods_info
        fields = '__all__'


class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = goods_design
        fields = '__all__'


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = goods_result
        fields = '__all__'


