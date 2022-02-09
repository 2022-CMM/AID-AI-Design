from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .models import profile


@method_decorator(csrf_exempt, name = "dispatch")
class RegisterView(APIView):
    '''
    - 사용자가 데이터를 입력해 회원가입을 진행합니다.
    '''

    def post(self, request):

        user = User.objects.create_user(
            username=request.data['id'],
            password=request.data['password'], 
            email=request.data['email']
        )

        account = profile.objects.create(
            user = user,
            phone_no = request.data['phone_no'],
            name = request.data['name'],
            user_type = 1,
            profile_image = request.data['image'],
        )

        user.save()

        token = Token.objects.create(user=user)
        return Response({"Token": token.key})


@method_decorator(csrf_exempt, name = "dispatch")
class LoginView(APIView):
    '''
    - 사용자가 입력한 데이터를 받아서 로그인을 합니다.
    '''

    def post(self, request):

        user = authenticate(
            username=request.data['id'],
            password=request.data['password']
        )
        
        if user is not None:
            token = Token.objects.get(user=user)
            return Response({"Token": token.key})
        else:
            return Response(status=401)
