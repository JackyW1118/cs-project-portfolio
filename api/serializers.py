from rest_framework import routers, serializers, viewsets
from myprojects.views import Project

# Create your views here.
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
