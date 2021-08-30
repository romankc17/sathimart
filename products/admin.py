from django.contrib import admin
from .models import Product,Image,ProductTag,ProductCategory

admin.site.register([Product,Image,ProductTag,ProductCategory])
