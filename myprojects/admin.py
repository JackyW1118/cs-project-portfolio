from django.contrib import admin
from .models import Project, ProjectUpdate, MyInformation
from django.contrib.auth.models import Group

class ProjectListFilter(admin.SimpleListFilter):
    title = 'Projects'
    parameter_name = 'project'

    def lookups(self, request, model_admin):
        """
        Returns a list of tuples. The first element in each
        tuple is the coded value for the option that will
        appear in the URL query. The second element is the
        human-readable name for the option that will appear
        in the right sidebar.
        """
        list_of_proj = []
        queryset = Project.objects.all()
        for proj in queryset:
            list_of_proj.append((str(proj.id), proj.title))
        return list_of_proj

    def queryset(self, request, queryset):
        """
        Returns the filtered queryset based on the value
        provided in the query string and retrievable via
        `self.value()`.
        """
        if self.value():
            return queryset.filter(project_id=self.value())
        return queryset

class ProjectUpdateAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'project', )
    list_filter = (ProjectListFilter, )


# Register your models here.
admin.site.site_header = "Portfolio Editor"
admin.site.register(Project)
admin.site.register(ProjectUpdate, ProjectUpdateAdmin)
admin.site.register(MyInformation)
admin.site.unregister(Group)
