from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .import models
from .import serializers

# the viewset below provides  list and retrieve actions
class TodoViewSet(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer