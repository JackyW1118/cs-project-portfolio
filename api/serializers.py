from rest_framework import routers, serializers, viewsets
from myprojects.views import Project, ProjectUpdate, MyInformation

# Create your views here.
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectUpdate
        fields = '__all__'

class MyInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyInformation
        fields = '__all__'
