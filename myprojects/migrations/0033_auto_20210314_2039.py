# Generated by Django 3.1.5 on 2021-03-15 03:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myprojects', '0032_auto_20210313_0015'),
    ]

    operations = [
        migrations.AddField(
            model_name='codesample',
            name='visible',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='project',
            name='visible',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='projectfeaturelist',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]
