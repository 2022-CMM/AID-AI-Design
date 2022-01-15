from django.db import models
from django.db.models.fields import DateField



class Article(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self) -> str:
        return self.title


# class ShopList(models.Model):
#     Name = models.CharField(max_length=100)
#     Class = models.CharField(max_length=100)
#     StartTime = DateField(auto_now=True)
#     LastUpdateTime = DateField(auto_now=True)

#     def __str__(self) -> str:
#         return self.Name