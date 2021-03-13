# Generated by Django 3.1.5 on 2021-03-13 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myprojects', '0029_codesample'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='codesample',
            name='github_gist_url',
        ),
        migrations.AddField(
            model_name='codesample',
            name='github_gist_id',
            field=models.CharField(default='a', max_length=50),
            preserve_default=False,
        ),
    ]
