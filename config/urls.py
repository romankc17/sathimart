from django.contrib import admin
from django.urls import path,include

from django.views.generic import TemplateView

from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('products/', include('products.urls')),
    path('accounts/', include('accounts.urls')),
    
    path('api/token/obtain/', 
         jwt_views.TokenObtainPairView.as_view(), 
         name='token_create'),  # override sjwt stock token
    path('api/token/refresh/', 
         jwt_views.TokenRefreshView.as_view(), 
         name='token_refresh'),
    
]