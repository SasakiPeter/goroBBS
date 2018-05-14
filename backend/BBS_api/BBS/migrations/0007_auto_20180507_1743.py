# Generated by Django 2.0.4 on 2018-05-07 08:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BBS', '0006_auto_20180507_1303'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='contributor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='BBS.User'),
        ),
        migrations.AlterField(
            model_name='board',
            name='contributor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='boards', to='BBS.User'),
        ),
    ]