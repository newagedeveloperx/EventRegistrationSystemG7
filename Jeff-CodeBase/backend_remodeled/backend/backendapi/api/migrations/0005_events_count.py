# Generated by Django 3.1.1 on 2020-10-05 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20201002_0025'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='count',
            field=models.IntegerField(default=0),
        ),
    ]
