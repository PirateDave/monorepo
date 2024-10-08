# Generated by Django 5.0.6 on 2024-06-20 17:34

import accounts.enums
import django_choices_field.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0022_alter_clientprofile_spoken_languages"),
    ]

    operations = [
        migrations.AlterField(
            model_name="clientprofile",
            name="gender",
            field=django_choices_field.fields.TextChoicesField(
                blank=True,
                choices=[("male", "Male"), ("female", "Female"), ("other", "Other")],
                choices_enum=accounts.enums.GenderEnum,
                max_length=6,
                null=True,
            ),
        ),
    ]
