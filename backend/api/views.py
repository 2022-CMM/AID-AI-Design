from django.shortcuts import get_object_or_404, render, HttpResponse
from rest_framework import serializers
from .models import goods_design, goods_result, goods_info
from .serializers import UserSerializer, DesignSerializer, UploadSerializer, ResultSerializer
from rest_framework import viewsets, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer()


class UploadViewSet(viewsets.ModelViewSet):

    queryset = goods_info.objects.all()
    serializer_class = UploadSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_info.objects.filter(delete_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = UploadSerializer(queryset, many=True)
        return Response(serializers.data)


class DesignViewSet(viewsets.ModelViewSet):

    queryset = goods_design.objects.all()
    serializer_class = DesignSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_design.objects.filter(delete_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = DesignSerializer(queryset, many=True)
        return Response(serializers.data)


class ResultViewSet(viewsets.ModelViewSet):

    queryset = goods_result.objects.all()
    serializer_class = ResultSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication, )
    
    def get_queryset(self):
        return goods_result.objects.filter(delete_flag='0')

    def list(self, request):
        queryset = self.get_queryset()
        serializers = ResultSerializer(queryset, many=True)
        return Response(serializers.data)