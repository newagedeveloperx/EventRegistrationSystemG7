# Generated by Django 3.1.1 on 2020-09-13 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events_api', '0002_auto_20200913_2051'),
    ]

    operations = [
        migrations.AlterField(
            model_name='admin_eventspage',
            name='time',
            field=models.CharField(choices=[('Morning', 'Morning'), ('Afternoon', 'Afternoon'), ('Evening', 'Evening')], max_length=100),
        ),
    ]
