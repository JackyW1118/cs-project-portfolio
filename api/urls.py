from django.urls import path
from .views import apiOverview, projectList
urlpatterns = [
    path('', apiOverview, name = 'api'),
    path('projects/', projectList, name='api-projects'),

]
