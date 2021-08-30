from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=120)
    description = models.TextField(blank=True, null=True)
    brand = models.CharField(max_length=50)
    
    def __str__(self):
        return self.name
    
class Image(models.Model):
    product = models.ForeignKey(Product,related_name='images',null=True, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/images/')
    
class ProductTag(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name='tags',null=True,blank=True)  
    tag = models.CharField(max_length=20)
    
    def __str__(self):
        return self.tag + " - " + self.product.name
    
class ProductCategory(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE,related_name='categories',null=True,blank=True)  
    category = models.CharField(max_length=20)
    
    def __str__(self):
        return self.category + " - " + self.product.name