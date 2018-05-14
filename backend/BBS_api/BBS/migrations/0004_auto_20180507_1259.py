# Generated by Django 2.0.4 on 2018-05-07 03:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BBS', '0003_auto_20180505_1954'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='board',
            name='pub_date',
        ),
        migrations.AddField(
            model_name='board',
            name='published_at',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='board',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='mail',
            field=models.EmailField(max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='name',
            field=models.CharField(max_length=32),
        ),
    ]