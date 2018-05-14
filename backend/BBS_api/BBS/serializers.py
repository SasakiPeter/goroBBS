from rest_framework import serializers
from . import models


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'board',
            'comment',
            'contributor',
            'pub_date',
            'votes',
        )
        model = models.Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'mail',
        )
        model = models.User


class BoardSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(
        many=True,
        read_only=True,
    )
    # この値は、ログインしてたら勝手に入力されるようにしたいから、わざわざPOSTする必要ない
    # contributor = UserSerializer(
    #     many=True,
    #     read_only=False,
    # )

    class Meta:
        fields = (
            'id',
            'title',
            'contributor',
            'published_at',
            'updated_at',
            'comments',
        )
        model = models.Board
