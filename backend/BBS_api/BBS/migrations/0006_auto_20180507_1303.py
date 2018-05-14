# Generated by Django 2.0.4 on 2018-05-07 04:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BBS', '0005_board_contributor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='board',
            name='contributor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user', to='BBS.User'),
        ),
    ]