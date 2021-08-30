from django.contrib import admin
from django.urls import path,include

from django.views.generic import TemplateView



urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('products/', include('products.urls')),
    path('accounts/', include('accounts.urls')),
    
    
    
]