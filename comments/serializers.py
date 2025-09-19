from rest_framework import serializers
from .models import Comment
from django.utils import timezone

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ["id", "author", "text", "date", "likes", "image"]
        read_only_fields = ["id", "author", "date"]

    def create(self, validated_data):
        validated_data["author"] = "Admin"
        validated_data["date"] = timezone.now()
        return super().create(validated_data)