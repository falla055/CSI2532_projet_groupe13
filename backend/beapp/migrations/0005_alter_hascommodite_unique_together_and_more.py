# Generated by Django 5.0.2 on 2024-04-06 15:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('beapp', '0004_alter_hascommodite_unique_together_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='hascommodite',
            unique_together={('numerochambre', 'commodite')},
        ),
        migrations.RemoveField(
            model_name='hascommodite',
            name='nomhotel',
        ),
    ]
