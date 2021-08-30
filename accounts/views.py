from rest_framework.exceptions import AuthenticationFailed
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import AccountSerializer
from .models import Account


class RegisterView(APIView):
    def post(self, request):   
        serializer = AccountSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        
        return Response(serializer.data, status=201)
        
        
class LoginView(APIView):
    
    def post(self, request):
        email = request.data.get('email')
        pwd = request.data.get('password')
        
        account = Account.objects.filter(email=email).first()
        
        if account is None:
            raise AuthenticationFailed("User Not Found")
        
        if not account.check_password(pwd):
            raise AuthenticationFailed("Password is not correct")
        
        if not account.is_active:
            raise AuthenticationFailed("User Not Active")
        
        return Response(
            {'message':'Logined'}
        )
        
        