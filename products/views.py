from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes

from products.serializers import ProductSerializer, ImageSerializer, ProductTagSerializer,ProductCategorySerializer
from products.models import Product,ProductTag,Image,ProductCategory

@permission_classes((AllowAny,))
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

@permission_classes((AllowAny,))    
class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

@permission_classes((AllowAny,))    
class ProductTagViewSet(viewsets.ModelViewSet):
    queryset = ProductTag.objects.all()
    serializer_class = ProductTagSerializer

@permission_classes((AllowAny,))    
class ProductCategoryViewSet(viewsets.ModelViewSet):
    queryset = ProductCategory.objects.all()
    serializer_class = ProductCategorySerializer
    