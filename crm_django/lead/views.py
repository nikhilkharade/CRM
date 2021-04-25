from django.shortcuts import render
from rest_framework import  viewsets
from .models import Lead
from .serializers import LeadSerializers
# Create your views here.


class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializers
    queryset = Lead.objects.all()

    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)