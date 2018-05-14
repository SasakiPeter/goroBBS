from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from . import models
from . import serializers


# class PingViewSet(generics.GenericAPIView):
#     permission_classes = (IsAuthenticated,)

#     def get(self, request, format=None):
#         return Response(data={'username': request.user.username}, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def ListBoard(request):
    if request.method == 'GET':
        queryset = models.Board.objects.all()
        serializer_class = serializers.BoardSerializer(queryset, many=True)
        return Response(serializer_class.data)

    elif request.method == 'POST':
        serializer_class = serializers.BoardSerializer(data=request.data)
        if serializer_class.is_valid():
            serializer_class.save()
            return Response(serializer_class.data, status=status.HTTP_201_CREATED)
        return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)

# class ListBoard(APIView):
#     def get(self, request, format=None):
#         snippets = models.Board.objects.all()
#         serializer = serializers.BoardSerializer(snippets, many=True)
#         return Response(serializer.data)

#     def post(self, request, format=None):
#         serializer = serializers.BoardSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # class ListBoard(generics.ListAPIView):
        #     queryset = models.Board.objects.all()
        #     serializer_class = serializers.BoardSerializer

        # class CreateBoard(generics.CreateAPIView):
        #     queryset = models.Board.objects.all()
        #     serializer_class = serializers.BoardSerializer


class DetailBoard(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializer


# board/pkにcommentを追加したい ↓できてない
@api_view(['POST'])
def CreateComment(request):
    serializer_class = serializers.BoardSerializer(data=request.data)
    if serializer_class.is_valid():
        serializer_class.save()
        return Response(serializer_class.data, status=status.HTTP_201_CREATED)
    return Response(serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)


class ListUser(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


class DetailUser(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
