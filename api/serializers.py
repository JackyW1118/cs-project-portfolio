from rest_framework import routers, serializers, viewsets
from myprojects.models import Project, ProjectUpdate, MyInformation, ProjectFeatureList

# Create your views here.
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectUpdate
        fields = '__all__'

class ProjectFeatureListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectFeatureList
        fields = '__all__'

class MyInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyInformation
        fields = '__all__'
