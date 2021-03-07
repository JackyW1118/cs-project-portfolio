# Generated by Django 3.1.5 on 2021-03-07 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myprojects', '0023_auto_20210306_1831'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='key_features',
            field=models.TextField(null=True, verbose_name='Key Features (split by /)'),
        ),
        migrations.AlterField(
            model_name='project',
            name='technical_details',
            field=models.TextField(null=True, verbose_name='Technical Details (split by /)'),
        ),
    ]
