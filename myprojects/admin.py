from django.contrib import admin
from .models import Project, ProjectUpdate, MyInformation

# Register your models here.
admin.site.register(Project)
admin.site.register(ProjectUpdate)
admin.site.register(MyInformation)

