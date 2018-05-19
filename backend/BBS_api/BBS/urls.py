from django.urls import path

from . import views

urlpatterns = [
    path('board/', views.ListBoard.as_view()),
    path('board/<int:pk>/', views.DetailBoard.as_view()),
    path('board/<int:pk>/comments/', views.CreateComment.as_view()),
    path('user/', views.ListUser.as_view()),
    path('user/create/', views.CreateUser.as_view()),
    # path('user/login/', views.Login.as_view()),
]
