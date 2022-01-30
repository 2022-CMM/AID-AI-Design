from django.contrib import admin
from django.contrib.admin.filters import ListFilter
from .models import goods_design
# from django.contrib.auth.admin import UserAdmin
from .models import User

@admin.register(goods_design)
class DesignModel(admin.ModelAdmin):
    list_filter = ('info_id', 'image_path')
    list_display = ('info_id', 'image_path')
    
