from django.db import models
from django.contrib.auth.hashers import make_password
# Create your models here.
# ในไฟล์ models.py ของแอป


class Member(models.Model):
    first_name = models.CharField(max_length=100,default="DefaultFirstName")
    last_name=models.CharField(max_length=100,default="DefaultLastName")
    nick_name =models.CharField(max_length=50,null=True, blank=True)
    email = models.EmailField(unique=True)
    phone_number =models.CharField(max_length=15,null=True, blank=True)
    password=models.CharField(max_length=255,default="defaultpassword")

    def __str__(self):
        return self.first_name
