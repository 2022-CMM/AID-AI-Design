from django.contrib.auth.models import User
from django.core import serializers as sl
from rest_framework import serializers
from rest_framework import viewsets, mixins, generics
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import goods_design, goods_result, goods_info
from .serializers import UserSerializer, DesignSerializer, UploadSerializer, ResultSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


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


# class ResultViewSet(viewsets.ModelViewSet):

#     queryset = goods_result.objects.all()
#     serializer_class = ResultSerializer
#     # permission_classes = [IsAuthenticated]
#     # authentication_classes = (TokenAuthentication, )
    
#     def get_queryset(self):
#         return goods_result.objects.filter(delete_flag='0')

#     def list(self, request):
#         queryset = self.get_queryset()
#         serializers = ResultSerializer(queryset, many=True)
#         return Response(serializers.data)

class ResultViewSet(APIView):
    '''
    - 디자이너가 완성한 작품들을 렌더링합니다.
    '''
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

    def get(self, request):
        
        query = '''
        SELECT e.id, e.image, e.title_new, e.goods_type, e.size, e.title, f.name
        from
        (SELECT c.*, d.goods_type, d.size, d.title
        FROM 
        (SELECT a.id, a.designer, a.image, a.title_new, b.info_id
        FROM goods_result a, goods_design b
        WHERE a.ai_design_id = b.id) c, goods_info d
        WHERE c.info_id = d.id
        ) e, profile f
        WHERE e.designer = f.user_id
        '''
        
        # data = list(goods_result.objects.raw(query))
        data = sl.serialize(
            'json',
            goods_result.objects.raw(query),
            fields=('id', 'image', 'title_new', 'goods_type', 'size', 'title', 'name'))

        return Response(data)
