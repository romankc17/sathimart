from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions

from products.serializers import ProductSerializer, ImageSerializer, ProductTagSerializer
from products.models import Product,ProductTag,Image

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
    
class ProductTagViewSet(viewsets.ModelViewSet):
    queryset = ProductTag.objects.all()
    serializer_class = ProductTagSerializer
    