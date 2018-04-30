from django.contrib import admin

# Register your models here.
from .models import Board, User, Comment

admin.site.register(Board)
admin.site.register(User)
admin.site.register(Comment)
