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


# class DesignViewSet(mixins.RetrieveModelMixin,
#                     mixins.UpdateModelMixin,
#                     mixins.DestroyModelMixin,
#                     generics.GenericAPIView):
#     queryset = goods_design.objects.all()
#     serializer_class = DesignSerializer()
#     permission_classes = [IsAuthenticated]

#     def get(self, request, *args, **kwargs):
#         design = goods_design.objects.all()
#         return Response(design)

#     def put(self, request, *args, **kwargs):
#         design = self.get_object()
#         return self.response

#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)

#     def create(self, request, *args, **kwargs):
#         return super().create(request, *args, **kwargs)

#     def list(self, request, *args, **kwargs):
#         return super().list(request, *args, **kwargs)

#     def retrieve(self, request, *args, **kwargs):
#         return super().retrieve(request, *args, **kwargs)

#     def get_serializer_class(self):
#         if self.action == 'retrieve':
#             return DesignSerializer
#         return super().get_serializer_class()

#     def get_queryset(self):
#         qs = super().get_queryset()
#         return qs.all()

#     def perform_create(self, serializer):
#         serializer.save(owner=self.request.user)

class DesignViewSet(viewsets.ModelViewSet):

    queryset = goods_design.objects.all()
    serializer_class = DesignSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

