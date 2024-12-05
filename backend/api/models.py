from django.db import models

# Create your models here.
# ในไฟล์ models.py ของแอป


class Member(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()

    def __str__(self):
        return self.name
