# Generated by Django 3.1.4 on 2021-01-01 01:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0014_auto_20201226_0822'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='mobile',
            field=models.BigIntegerField(default=7890654321),
        ),
    ]
