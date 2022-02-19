from tkinter import CASCADE
from django.db import models
from django.db.models.fields import DateField
from django.contrib.auth.models import User, AbstractUser


class goods_info(models.Model):
    '''
    - User Upload Image
    '''
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="user", default='1')
    image = models.ImageField(blank=True, null=True, upload_to="upload_image")
    image_results = models.ImageField(blank=True, null=True, upload_to="results")
    purchased_date = models.DateTimeField(db_column='purchased_date', max_length=100, blank=True)
    # quality = models.CharField(db_column='quality', max_length=100, blank=True)
    # material = models.CharField(db_column='material', max_length=100, blank=True)
    deadline = models.DateTimeField(db_column='deadline', max_length=100, blank=True, null=True)
    goods_type = models.CharField(db_column='goods_type', max_length=100, blank=True)
    size = models.CharField(db_column='size', max_length=100, blank=True)
    title = models.CharField(db_column='title', max_length=100, blank=True)
    style = models.CharField(db_column='style', max_length=100, blank=True)
    title_changed = models.CharField(db_column='title_changed', max_length=100, blank=True)
    designer = models.CharField(db_column='designer', max_length=100, blank=True)
    transform_flag = models.CharField(db_column='transform_flag', max_length=100, blank=True, default='1')
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True, auto_now=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)

    class Meta:
        db_table = 'goods_info'


class goods_design(models.Model):
    '''
    - AI model Output Image
    '''
    info = models.ForeignKey(goods_info, on_delete=models.CASCADE, verbose_name="info", default='1')
    image = models.ImageField(blank=True, null=True, upload_to="ai_designs")
    image_selected = models.CharField(db_column='image_selected', max_length=100, blank=True)
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True, auto_now=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)
    

    class Meta:
        db_table = 'goods_design'


class goods_result(models.Model):
    '''
    - Designer Works Image
    '''
    ai_design = models.OneToOneField(goods_design, on_delete=models.CASCADE, related_name="goods_result")
    designer = models.IntegerField(db_column='designer', blank=True)
    image = models.ImageField(blank=True, null=True, upload_to="result")
    title_new = models.CharField(db_column='title_new', max_length=100, blank=True)
    description = models.CharField(db_column='description', max_length=100, blank=True)
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True, auto_now=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)

    class Meta:
        db_table = 'goods_result'


class request_list(models.Model):
    goods = models.OneToOneField(goods_info, on_delete=models.CASCADE, related_name="goods_info", default='1')
    title = models.CharField(db_column='title', max_length=100, blank=True)
    contents = models.CharField(db_column='contents', max_length=100, blank=True)
    created_at = models.DateTimeField(db_column='created_at', max_length=100, blank=True)
    updated_at = models.DateTimeField(db_column='updated_at', max_length=100, blank=True)
    delete_flag = models.CharField(db_column='delete_flag', max_length=100, blank=True)

    class Meta:
        db_table = 'request_list'


