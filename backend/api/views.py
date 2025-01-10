from django.shortcuts import render
from .models import Member
from .serializers import MemberSerializers
from rest_framework.views import APIView
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

@api_view(['GET'])
def example_view(request):
    data = {"message": "Hello, this is an API response! 55555555555"}
    return Response(data)


class MemberList(APIView):
    def get(self,request):
        Members=Member.objects.all() # ดึงสินค้าทั้งหมด 
        serializer =MemberSerializers(Members,many=True) 
      
        return Response(serializer.data)
    
class RegisterAPIView(APIView):
    def post(self,request):
        serializer=MemberSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"massage":"Registration successful ","data":serializer.data},status=status.HTTP_201_CREATED)
        #เพิ่ม Error ให้หน้าบ้าน
        errors =serializer.errors
        detailed_errors ={field:errors[field][0] for field in errors}

        return Response({"message": "Validation failed", "errors": detailed_errors},status=status.HTTP_400_BAD_REQUEST)