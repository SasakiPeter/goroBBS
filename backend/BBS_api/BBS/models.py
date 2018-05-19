from django.db import models

# Create your models here.
import datetime
from django.utils import timezone
from django.contrib.auth.models import User


# class User(models.Model):
#     name = models.CharField(max_length=32)
#     mail = models.EmailField(null=True)

#     def __str__(self):
#         return "{}: {}".format(self.pk, self.name)

#     def __repr__(self):
#         return "{}: {}".format(self.pk, self.name)


class Board(models.Model):
    title = models.CharField(max_length=200)
    published_at = models.DateTimeField(
        auto_now_add=True, null=True)
    updated_at = models.DateTimeField(
        auto_now=True, null=True)
    contributor = models.ForeignKey(
        User, related_name='boards', on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

    def was_published_recently(self):
        now = timezone.now()
        return now-datetime.timedelta(days=1) <= self.published_at <= now

    def was_updated_recently(self):
        now = timezone.now()
        return now-datetime.timedelta(days=1) <= self.updated_at <= now


class Comment(models.Model):
    # Board.commentsってやると逆参照できる
    board = models.ForeignKey(
        Board, related_name='comments', on_delete=models.CASCADE)
    comment = models.TextField()
    # User.commentsってやるとそのユーザーがresponceした一覧を取得できる
    contributor = models.ForeignKey(
        User, related_name='comments', on_delete=models.CASCADE, null=True)
    pub_date = models.DateField('date published')
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.comment
