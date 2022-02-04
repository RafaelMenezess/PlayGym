# Generated by Django 4.0.1 on 2022-02-03 02:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='active',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='student',
            name='birthday',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='create_at',
            field=models.DateField(auto_now_add=True, default='2022-02-02'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='student',
            name='password',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='rg',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='update_at',
            field=models.DateField(auto_now=True),
        ),
    ]