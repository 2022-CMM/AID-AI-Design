from rest_framework import serializers
from .models import goods_design, goods_info, goods_result, request_list
from users.models import profile
from django.contrib.auth.models import User

        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
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
        model = goods_info
        exclude = ['transform_flag', 'delete_flag']


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = request_list
        fields = ['id', 'user', 'title', 'contents', 'designer']
        depth = 1


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = profile
        fields = '__all__'
        depth = 1



