from rest_framework import serializers
from myprojects.models import Project, ProjectUpdate, MyInformation, ProjectFeatureList, CodeSample

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

class CodeSampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CodeSample
        fields = '__all__'