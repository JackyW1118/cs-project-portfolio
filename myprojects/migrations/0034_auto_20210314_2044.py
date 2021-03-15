# Generated by Django 3.1.5 on 2021-03-15 03:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myprojects', '0033_auto_20210314_2039'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='codesample',
            name='visible',
        ),
        migrations.RemoveField(
            model_name='projectfeaturelist',
            name='visible',
        ),
        migrations.AddField(
            model_name='project',
            name='code_sample_visible',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='project',
            name='feature_list_visible',
            field=models.BooleanField(default=True),
        ),
    ]
