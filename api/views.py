from django.urls import reverse

from rest_framework.decorators import api_view
from rest_framework.response import Response

import myprojects.models as models
import api.serializers as serializers


# Create your views here.
@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Project List': {
            'Path:': reverse('api-projects'),
            'Query Params': {
                'slug': 'filter project by slug name'
            }
        },
        'Project Update List': {
            'Path': reverse('api-updates'),
            'Query Params': {
                'proj_pk': 'filter project updates by id of the project'
            }
        },
        'Project Feature List': {
            'Path': reverse('api-features'),
            'Query Params': {
                'proj_pk': 'filter project features by id of the project'
            }
        },
        'My Information': {
            'Path': reverse('api-myinfo'),
            'Query Params': {}
        },
        'Code Samples': {
            'Path': reverse('api-codes'),
            'Query Params': {
                'proj_pk': 'filter code samples by id of the project'
            }
        }
    }
    return Response(api_urls)


@api_view(['GET'])
def project_list(request):
    queryset = models.Project.objects.all()
    slug = request.query_params.get('slug', None)

    if (slug):
        queryset = queryset.filter(slug=slug)
    serializer = serializers.ProjectSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def project_update_list(request):
    queryset = models.ProjectUpdate.objects.all()
    proj_pk = request.query_params.get('proj_pk', None)

    if (proj_pk):
        queryset = queryset.filter(project=proj_pk)
    serializer = serializers.ProjectUpdateSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def project_feature_list(request):
    queryset = models.ProjectFeatureList.objects.all()
    proj_pk = request.query_params.get('proj_pk', None)

    if (proj_pk):
        queryset = queryset.filter(project=proj_pk)
    serializer = serializers.ProjectFeatureListSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def my_info(request):
    queryset = models.MyInformation.objects.filter(pk=1)
    serializer = serializers.MyInformationSerializer(queryset, many=True)
    return Response(serializer.data[0])


@api_view(['GET'])
def code_sample_list(request):
    queryset = models.CodeSample.objects.all()
    proj_pk = request.query_params.get('proj_pk', None)

    if (proj_pk):
        queryset = queryset.filter(project=proj_pk)
    serializer = serializers.CodeSampleSerializer(queryset, many=True)
    return Response(serializer.data)
