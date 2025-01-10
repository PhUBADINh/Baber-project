from rest_framework import serializers
from .models import Member
from django.contrib.auth.hashers import make_password


class MemberSerializers(serializers.ModelSerializer):
    class Meta:
        model =Member 
        fields =['id','first_name','last_name','last_name','nick_name','email','phone_number','password']
        extra_kwargs ={
            'password':{'write_only':True},
        }

    def validate_password(self,value):
        if len(value) <8 :
            raise serializers.ValidationError("password must be at least 8 character long ")
        return value
    
    def create(self,validate_date): #เข้ารหัสผ่านก่อนบันทึก
        validate_date['password']=make_password(validate_date['password'])
        return super().create(validate_date)
    