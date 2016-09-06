from django.shortcuts import render
from rsmapweb.models import Signal
from rsmapweb.serializers import SignalSerializer
from rest_framework import generics

# Create your views here.


class SignalList(generics.ListCreateAPIView):
    queryset = Signal.objects.all()
    serializer_class = SignalSerializer


class SignalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Signal.objects.all()
    serializer_class = SignalSerializer
