from django.urls import path

from . import views

urlpatterns = [
    path('board/', views.ListBoard),
    path('board/<int:pk>/', views.DetailBoard.as_view()),
    path('board/<int:pk>/comments', views.CreateComment),
    path('user/', views.ListUser.as_view()),
]
