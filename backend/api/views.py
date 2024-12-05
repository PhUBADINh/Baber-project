from django.shortcuts import render
from .models import Member
from .serializers import MemberSerializers
from rest_framework.views import APIView
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def example_view(request):
    data = {"message": "Hello, this is an API response! 55555555555"}
    return Response(data)


class MemberList(APIView):
    def get(self,request):
        Members=Member.objects.all() # ดึงสินค้าทั้งหมด 
        serializer =MemberSerializers(Members,many=True) 
      
        return Response(serializer.data)