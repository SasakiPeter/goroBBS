from django.urls import path

from . import views

urlpatterns = [
    path('board/', views.ListBoard.as_view()),
    path('board/<int:pk>/', views.DetailBoard.as_view()),
]
