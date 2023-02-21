from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.new_user_vacation_choice),
    path('all/<str:id>/', views.get_all_vacation_choices), 
    path('<int:id>/update/', views.update_user_vacation_choices), 
    path('<int:pk>/', views.delete_user_vacation_choices)
]