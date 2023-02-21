from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from .models import Favorites
from .serializers import FavoritesSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_vacation_choices(request):
    favorites = Favorites.objects.all()
    serializer = FavoritesSerializer(favorites, many=True)
    return Response(serializer.data)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def update_user_vacation_choices(request, id):
    favorite = Favorites.objects.get(pk = id)
    if request.method == 'PUT': 
        serializer = FavoritesSerializer(favorite, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def delete_user_vacation_choices(request, pk):
    favorite = get_object_or_404(Favorites, pk=pk)
    if request.method == 'DELETE':
        favorite.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    