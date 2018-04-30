from rest_framework import serializers
from . import models


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'board',
            'comment',
            'pub_date',
            'votes',
        )
        model = models.Comment


class BoardSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(
        many=True,
        read_only=True,
    )

    class Meta:
        fields = (
            'id',
            'title',
            'pub_date',
            'comments',
        )
        model = models.Board
