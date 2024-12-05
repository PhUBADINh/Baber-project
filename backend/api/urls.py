from django.urls import path
from . import views
from .views import MemberList
urlpatterns = [
    path('example/', views.example_view, name='example'),
    path('Member/',MemberList.as_view(),name='member-list')
]
