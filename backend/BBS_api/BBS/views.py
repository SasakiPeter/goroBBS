from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from . import models
from . import serializers


class ListBoard(generics.ListCreateAPIView):
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializer


class DetailBoard(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializer
