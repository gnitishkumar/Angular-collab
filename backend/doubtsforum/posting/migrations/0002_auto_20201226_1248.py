# Generated by Django 3.1.4 on 2020-12-26 12:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posting', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comments',
            old_name='desciption',
            new_name='description',
        ),
    ]
