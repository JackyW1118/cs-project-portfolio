from django.contrib import admin
from .models import Project, ProjectUpdate, MyInformation, ProjectFeatureList, CodeSample
from django.contrib.auth.models import Group

class ProjectUpdateInline(admin.StackedInline):
    model = ProjectUpdate
    extra = 0

class ProjectFeatureListInline(admin.TabularInline):
    model = ProjectFeatureList
    extra = 0

class CodeSampleInline(admin.TabularInline):
    model = CodeSample
    extra = 0

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectFeatureListInline, CodeSampleInline]

# Register your models here.
admin.site.site_header = "Portfolio Editor"
admin.site.register(Project, ProjectAdmin)
admin.site.register(MyInformation)
admin.site.unregister(Group)