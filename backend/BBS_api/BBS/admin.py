from django.contrib import admin

# Register your models here.
# from django.contrib.auth.admin import UserAdmin
from .models import Board, User, Comment

admin.site.register(Board)
admin.site.register(Comment)
# admin.site.register(User, UserAdmin)
