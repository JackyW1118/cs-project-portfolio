from rest_framework import routers, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from myprojects.models import Project
from .serializers import ProjectSerializer

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls = {}
    return Response(api_urls)

@api_view(['GET'])
def projectList(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)