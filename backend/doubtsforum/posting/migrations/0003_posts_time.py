# Generated by Django 3.1.4 on 2020-12-29 06:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posting', '0002_auto_20201226_1248'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='time',
            field=models.TimeField(auto_now=True),
        ),
    ]
