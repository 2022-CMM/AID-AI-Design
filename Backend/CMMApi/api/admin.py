from django.contrib import admin
from django.contrib.admin.filters import ListFilter
from .models import Article

# admin.site.register(Article)

@admin.register(Article)
class ArticleModel(admin.ModelAdmin):
    list_filter = ('title', 'description')
    list_display = ('title', 'description')
    
