from django.urls import reverse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from myprojects.models import Project, ProjectUpdate, MyInformation
from .serializers import ProjectSerializer, ProjectUpdateSerializer, MyInformationSerializer

# Create your views here.
@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Project List': reverse('api-projects'),
        'Project Update List': reverse('api-updates'),
        'My Information':reverse('api-myinfo')
    }
    return Response(api_urls)

@api_view(['GET'])
def project_list(request):
    queryset = Project.objects.all()
    slug = request.query_params.get('slug', None)

    if(slug):
        queryset = queryset.filter(slug=slug)
    serializer = ProjectSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def project_update_list(request):
    queryset = ProjectUpdate.objects.all()
    proj_pk = request.query_params.get('proj_pk', None)

    if(proj_pk):
        queryset = queryset.filter(project=proj_pk)
    serializer = ProjectUpdateSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def my_info(request):
    queryset = MyInformation.objects.filter(pk=1)
    serializer = MyInformationSerializer(queryset, many=True)
    return Response(serializer.data[0])

