# Generated by Django 3.2 on 2022-02-19 12:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='request_list',
            name='designer',
        ),
        migrations.RemoveField(
            model_name='request_list',
            name='public_flag',
        ),
        migrations.DeleteModel(
            name='comment',
        ),
    ]
