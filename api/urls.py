from django.urls import path
from . import  views
urlpatterns = [
    path('', views.api_overview, name = 'api'),
    path('project-list/', views.project_list, name='api-projects'),
    path('project-update-list/', views.project_update_list, name='api-updates'),
    path('project-feature-list/', views.project_feature_list, name='api-features'),
    path('code-sample-list/', views.code_sample_list, name='api-codes'),
    path('myinfo/', views.my_info, name='api-myinfo'),
]
