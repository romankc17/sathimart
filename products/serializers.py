from rest_framework import serializers

from products.models import Product, Image, ProductTag, ProductCategory

        
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ['product','image']
        
class ProductTagSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ProductTag
        fields = ['id','tag']
        
class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTag
        fields = ['id','category']
       
       
class ProductSerializer(serializers.ModelSerializer):
    tags = ProductTagSerializer(many=True,read_only=False,required=False)
    categories = ProductCategorySerializer(many=True,read_only=False,required=False)
    
    class Meta:
        model = Product
        fields = ['name','description','brand','tags','categories']
        
    def create(self, validated_data):
        tags = validated_data.pop('tags')
        categories = validated_data.pop('categories')

        product = Product.objects.create(**validated_data)
        [ProductTag.objects.create(product = product, **tag) for tag in tags]
        [ProductCategory.objects.create(product = product, **category) for category in categories]
        return product


