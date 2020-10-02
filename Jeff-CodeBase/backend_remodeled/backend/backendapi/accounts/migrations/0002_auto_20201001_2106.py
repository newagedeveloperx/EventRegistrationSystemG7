# Generated by Django 3.1.1 on 2020-10-01 21:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='account',
            name='phone',
        ),
        migrations.AddField(
            model_name='account',
            name='Phone',
            field=models.CharField(default=0, max_length=10, verbose_name='Phone'),
            preserve_default=False,
        ),
    ]
