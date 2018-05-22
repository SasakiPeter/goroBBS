from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.utils import timezone
from datetime import datetime

from . import models
from . import serializers


class CreateUser(APIView):
    def post(self, request):
        user = User.objects.create_user(
            request.POST["name"], request.POST["email"], request.POST["password"])
        user.is_staff = False
        user.save()
        return Response('Success')


# class Login(APIView):
#     def post(self, request):
#         user = authenticate(
#             username=request.POST["name"], password=request.POST["password"])
#         if user is not None:
#             if user.is_active:
#                 print("Success")
#                 login(request, user)
#             else:
#                 print("Error")
#         else:
#             print("Credentials Incorrect")
#         # return redirect('user:detail', user_id=user.id)
#         return Response("Success?")


class ListBoard(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        snippets = models.Board.objects.all()
        serializer = serializers.BoardSerializer(snippets, many=True)
        return Response(serializer.data)

    @permission_classes((IsAuthenticated, ))
    def post(self, request, format=None):
        # contributorをログインしているユーザーにしようとしたが、キーの値くれといわれる
        # よって、request.user.username=>request.user.idとした
        # request.data["contributor"] = request.user.id
        data = {
            'title': request.data['title'],
            'contributor': request.user.id,
        }
        serializer = serializers.BoardSerializer(data=data)
        # serializer = serializers.BoardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DetailBoard(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializer


# board/pkにcommentを追加したい ↓できてない
class CreateComment(APIView):
    permission_classes = (IsAuthenticated,)

    # jsonでcommentを受け取る　board(id)と、contributor(id)は取得
    def post(self, request, pk, format=None):
        # request.data['contributor'] = request.user.id
        # request.data['board'] = pk
        # 上記のように書いてはいけない
        data = {
            'board': pk,
            'comment': request.data["comment"],
            'contributor': request.user.id,
            'pub_date': timezone.now().date(),
        }
        serializer = serializers.CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ListUser(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


# class DetailUser(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.User.objects.all()
#     serializer_class = serializers.UserSerializer
