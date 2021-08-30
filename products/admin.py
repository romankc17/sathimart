from django.contrib import admin
from .models import Product,Image,ProductTag

admin.site.register([Product,Image,ProductTag])
