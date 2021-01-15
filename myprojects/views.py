from django.shortcuts import render
from .models import ProjectUpdate, Project
from django.views.generic import DetailView

# home
def index(request):
    all_proj = Project.objects.all()
    context = {
        'projects': all_proj,
    }
    return render(request, 'myprojects/portfoliohome.html', context)

class ProjectDetailView(DetailView):
    model = Project
    slug_url_kwarg = 'page_slug'
    slug_field = 'slug'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        print(context)
        context["updates"]= ProjectUpdate.objects.filter(project=self.get_object())
        return context