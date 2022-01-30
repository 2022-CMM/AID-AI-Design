from django.shortcuts import get_object_or_404, render, HttpResponse
from rest_framework import serializers
from .models import goods_design
from .serializers import UserSerializer, DesignSerializer
from rest_framework import viewsets, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User



class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer()

class DesignViewSet(viewsets.ModelViewSet):

    queryset = goods_design.objects.all()
    serializer_class = DesignSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

