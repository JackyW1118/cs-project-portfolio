from phone_field import PhoneField
from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError

# each model is a project
class Project(models.Model):
    title = models.CharField(max_length=100)
    date_posted = models.DateTimeField(default=timezone.now, null=True)
    short_description = models.TextField(blank=True)
    description = models.TextField(verbose_name="Description")
    project_link = models.URLField(blank=True, null=True)
    front_image = models.ImageField(upload_to='proj_frontimages',verbose_name="Thumbnail")
    large_image = models.ImageField(upload_to='proj_frontimages', blank=True)
    technical_details = models.TextField(verbose_name="Technical Details (split by line)", null=True)
    slug = models.SlugField(unique=True, blank=True)
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.slug is None:
            self.slug = f"{self.title}".replace(' ','').lower()
        super(Project, self).save(*args, **kwargs)

    def tech_as_list(self):
        return f"{self.technical_details}".split('\n')

class ProjectUpdate(models.Model):
    date_posted = models.DateTimeField(default=timezone.now)
    details = models.TextField()
    link = models.URLField(null=True, blank=True)
    first_image = models.ImageField(upload_to='update_images',blank=True, verbose_name="Image 1")
    second_image = models.ImageField(upload_to='update_images', blank=True, verbose_name="Image 2")
    third_image = models.ImageField(upload_to='update_images', blank=True, verbose_name="Image 3")

    #relationship to Project model
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    def __str__(self):
        return f"Update for {self.project.title} on {self.date_posted.date()}"

def validate_only_one_instance(obj):
    model = obj.__class__
    if (model.objects.count() > 0 and obj.id != model.objects.get().id):
        raise ValidationError("Can only create 1 %s instance" % model.__name__)

class MyInformation(models.Model):
    home_page_hero_text = models.TextField()
    about_page_description = models.TextField()
    phone_number = PhoneField()
    email = models.EmailField()

    def clean(self):
        validate_only_one_instance(self)