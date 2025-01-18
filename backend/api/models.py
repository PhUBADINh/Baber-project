from mongoengine import Document, StringField, EmailField, BooleanField, IntField
from mongoengine import connect
from django.contrib.auth.hashers import make_password, check_password



class Member(Document):
    first_name = StringField(max_length=100, default="DefaultFirstName")
    last_name = StringField(max_length=100, default="DefaultLastName")
    nick_name = StringField(max_length=50, null=True, blank=True)
    email = EmailField(unique=True)
    phone_number = StringField(max_length=15, null=True, blank=True)
    password = StringField(max_length=255, default="defaultpassword")

    # ฟังก์ชันเพื่อเข้ารหัสรหัสผ่าน (hashed)
    def set_password(self, password):
        self.password = make_password(password)  # ทำการเข้ารหัสรหัสผ่าน

    # ฟังก์ชันเพื่อเช็คความถูกต้องของรหัสผ่าน
    def check_password(self, password):
        return check_password(password, self.password)  # เปรียบเทียบรหัสผ่านกับ hash

    def __str__(self):
        return self.first_name
