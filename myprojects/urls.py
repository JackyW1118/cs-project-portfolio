from django.urls import path
from . import views
from .views import ProjectDetailView

urlpatterns = [
    #home page
    path('', views.index, name = 'portfolio-home'),
    path('project/<slug:page_slug>/', ProjectDetailView.as_view(), name='project-detail'),
    path('about/', views.about, name = 'about'),
]
