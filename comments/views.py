from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CommentSerializer
from .models import Comment

# CommentViewSet which provide GET, POST, GET, PUT, DELETE
class CommentViewSet(viewsets.ModelViewSet):
    
    queryset = Comment.objects.all().order_by("-date")
    serializer_class = CommentSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ["date", "likes"] # Consider date and likes as the most important fields to order by in current webstie
    