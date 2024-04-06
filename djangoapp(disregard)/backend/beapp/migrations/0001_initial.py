# Generated by Django 5.0.4 on 2024-04-06 04:50

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chaine',
            fields=[
                ('nomchaine', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('nombrehotel', models.IntegerField(blank=True, null=True)),
                ('numrue', models.IntegerField(blank=True, null=True)),
                ('nomrue', models.CharField(blank=True, max_length=255, null=True)),
                ('ville', models.CharField(blank=True, max_length=255, null=True)),
                ('cp', models.CharField(blank=True, max_length=10, null=True)),
            ],
            options={
                'db_table': 'chaine',
            },
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('nas', models.CharField(max_length=255, primary_key=True, serialize=False, validators=[django.core.validators.RegexValidator(regex='^[0-9]{9}$')])),
                ('prenom', models.CharField(max_length=255)),
                ('nom', models.CharField(max_length=255)),
                ('numrue', models.IntegerField()),
                ('nomrue', models.CharField(max_length=255)),
                ('ville', models.CharField(max_length=255)),
                ('cp', models.CharField(max_length=10)),
                ('registerdate', models.DateField(auto_now_add=True)),
            ],
            options={
                'db_table': 'client',
            },
        ),
        migrations.CreateModel(
            name='ChaineContact',
            fields=[
                ('contactid', models.AutoField(primary_key=True, serialize=False)),
                ('contactphone', models.CharField(blank=True, max_length=20, null=True)),
                ('contactemail', models.EmailField(blank=True, max_length=254, null=True)),
                ('nomchaine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beapp.chaine')),
            ],
            options={
                'db_table': 'chainecontact',
            },
        ),
        migrations.CreateModel(
            name='Hotel',
            fields=[
                ('nomHotel', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('classification', models.IntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(5)])),
                ('numRue', models.IntegerField(blank=True, null=True)),
                ('nomRue', models.CharField(blank=True, max_length=100, null=True)),
                ('ville', models.CharField(blank=True, max_length=100, null=True)),
                ('cp', models.CharField(blank=True, max_length=10, null=True)),
                ('phonecontact', models.CharField(blank=True, max_length=20, null=True)),
                ('emailcontact', models.EmailField(blank=True, max_length=254, null=True)),
                ('nomchaine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beapp.chaine')),
            ],
            options={
                'db_table': 'hotel',
            },
        ),
        migrations.CreateModel(
            name='Employe',
            fields=[
                ('nas', models.CharField(max_length=255, primary_key=True, serialize=False, validators=[django.core.validators.RegexValidator(regex='^[0-9]{9}$')])),
                ('prenom', models.CharField(max_length=255)),
                ('nom', models.CharField(max_length=255)),
                ('numrue', models.IntegerField()),
                ('nomrue', models.CharField(max_length=255)),
                ('ville', models.CharField(max_length=255)),
                ('CP', models.CharField(max_length=10)),
                ('role', models.CharField(max_length=255)),
                ('nomhotel', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='beapp.hotel')),
            ],
            options={
                'db_table': 'employe',
            },
        ),
        migrations.CreateModel(
            name='Chambre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('numerochambre', models.IntegerField()),
                ('prixparnuit', models.DecimalField(decimal_places=2, max_digits=10, validators=[django.core.validators.MinValueValidator(0)])),
                ('vue', models.CharField(blank=True, choices=[('mer', 'Mer'), ('paysage', 'Paysage'), ('ville', 'Ville'), ('montagne', 'Montagne')], max_length=255, null=True)),
                ('dommages', models.TextField(blank=True, null=True)),
                ('capacite', models.IntegerField()),
                ('extphone', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1000), django.core.validators.MaxValueValidator(9999)])),
                ('occupied', models.BooleanField(default=False)),
                ('nomhotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beapp.hotel')),
            ],
            options={
                'db_table': 'chambre',
                'unique_together': {('numerochambre', 'nomhotel')},
            },
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('locationid', models.AutoField(primary_key=True, serialize=False)),
                ('locationstart', models.DateField()),
                ('locationend', models.DateField()),
                ('paymentid', models.CharField(blank=True, max_length=100, null=True)),
                ('nasclient', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='beapp.client')),
                ('nasemploye', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='beapp.employe')),
                ('nomhotel', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='beapp.hotel')),
                ('numchambre', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='beapp.chambre')),
            ],
            options={
                'db_table': 'location',
            },
        ),
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('resid', models.AutoField(primary_key=True, serialize=False)),
                ('resstart', models.DateField()),
                ('resend', models.DateField()),
                ('nasclient', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='beapp.client')),
                ('nomhotel', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='beapp.hotel')),
                ('numerochambre', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='beapp.chambre')),
            ],
            options={
                'db_table': 'reservation',
            },
        ),
        migrations.CreateModel(
            name='HasCommodite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('commodite', models.CharField(choices=[('fridge', 'Fridge'), ('tv', 'TV'), ('ac', 'AC'), ('safe', 'Safe'), ('patio', 'Patio'), ('hot tub', 'Hot Tub')], max_length=50)),
                ('numerochambre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beapp.chambre')),
            ],
            options={
                'db_table': 'hascommodite',
                'unique_together': {('numerochambre', 'commodite')},
            },
        ),
        migrations.CreateModel(
            name='GestionnaireHotel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nasgestionnaire', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='beapp.employe')),
                ('nomhotel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beapp.hotel')),
            ],
            options={
                'db_table': 'gestionnairehotel',
                'unique_together': {('nomhotel', 'nasgestionnaire')},
            },
        ),
    ]