# Generated by Django 3.1.5 on 2021-01-15 19:08

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('myprojects', '0007_auto_20210114_2350'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectupdate',
            name='date_posted',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]