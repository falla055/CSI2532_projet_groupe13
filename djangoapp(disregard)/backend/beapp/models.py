from django.db import models

# Create your models here.
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator, RegexValidator

class Chaine(models.Model):
    nomchaine = models.CharField(max_length=255, primary_key=True)
    nombrehotel = models.IntegerField(null=True, blank=True)
    numrue = models.IntegerField(null=True, blank=True)
    nomrue = models.CharField(max_length=255, null=True, blank=True)
    ville = models.CharField(max_length=255, null=True, blank=True)
    cp = models.CharField(max_length=10, null=True, blank=True)

    class Meta:
        db_table='chaine'
    
    def __str__(self):
        return self.nomchaine


class ChaineContact(models.Model):
    contactid = models.AutoField(primary_key=True)
    nomchaine = models.ForeignKey(Chaine, on_delete=models.CASCADE)
    contactphone = models.CharField(max_length=20, null=True, blank=True)
    contactemail = models.EmailField(null=True, blank=True)

    class Meta:
        db_table='chainecontact'

class Hotel(models.Model):
    nomHotel = models.CharField(max_length=255, primary_key=True)
    classification = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    numRue = models.IntegerField(null=True, blank=True)
    nomRue = models.CharField(max_length=100, null=True, blank=True)
    ville = models.CharField(max_length=100, null=True, blank=True)
    cp = models.CharField(max_length=10, null=True, blank=True)
    phonecontact = models.CharField(max_length=20, null=True, blank=True)
    emailcontact = models.EmailField(null=True, blank=True)
    nomchaine = models.ForeignKey(Chaine, on_delete=models.CASCADE)
    nombrechambre = models.IntegerField(null=True)

    class Meta:
        db_table='hotel'

    def __str__(self):
        return self.nomHotel


class Chambre(models.Model):
    numerochambre = models.IntegerField()
    prixparnuit = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    VUE_CHOICES = [
        ('mer', 'Mer'),
        ('paysage', 'Paysage'),
        ('ville', 'Ville'),
        ('montagne', 'Montagne'),
    ]
    vue = models.CharField(max_length=255, choices=VUE_CHOICES, null=True, blank=True)
    dommages = models.TextField(null=True, blank=True)
    capacite = models.IntegerField()
    extphone = models.IntegerField(validators=[MinValueValidator(1000), MaxValueValidator(9999)], null=True, blank=True)
    nomhotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    occupied = models.BooleanField(default=False)

    class Meta:
        unique_together = [['numerochambre', 'nomhotel']]
        db_table='chambre'

    def __str__(self):
        return str(self.numerochambre) + ' ' + str(self.nomhotel)

class HasCommodite(models.Model):
    numerochambre = models.ForeignKey(Chambre, on_delete=models.CASCADE)
    commodite = models.CharField(max_length=50, choices=[
        ('fridge', 'Fridge'),
        ('tv', 'TV'),
        ('ac', 'AC'),
        ('safe', 'Safe'),
        ('patio', 'Patio'),
        ('hot tub', 'Hot Tub'),
    ])

    class Meta:
        unique_together = [['numerochambre', 'commodite']]
        db_table = 'hascommodite'

class Employe(models.Model):
    nas = models.CharField(max_length=255, primary_key=True,
                           validators=[RegexValidator(regex='^[0-9]{9}$')])
    prenom = models.CharField(max_length=255)
    nom = models.CharField(max_length=255)
    numrue = models.IntegerField()
    nomrue = models.CharField(max_length=255)
    ville = models.CharField(max_length=255)
    CP = models.CharField(max_length=10)
    role = models.CharField(max_length=255)
    nomhotel = models.ForeignKey(Hotel, on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        db_table='employe'

    def __str__(self):
        return self.nas

class GestionnaireHotel(models.Model):
    nomhotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    nasgestionnaire = models.ForeignKey(Employe, on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        unique_together = [['nomhotel', 'nasgestionnaire']]
        db_table ='gestionnairehotel'

    def __str__(self):
        return 'Gestionnaire ' + str(self.nomhotel)

class Client(models.Model):
    nas = models.CharField(max_length=255, primary_key=True,
                           validators=[RegexValidator(regex='^[0-9]{9}$')])
    prenom = models.CharField(max_length=255)
    nom = models.CharField(max_length=255)
    numrue = models.IntegerField()
    nomrue = models.CharField(max_length=255)
    ville = models.CharField(max_length=255)
    cp = models.CharField(max_length=10)
    registerdate = models.DateField(auto_now_add=True)

    class Meta:
        db_table='client'

    def __str__(self):
        return self.nas

class Reservation(models.Model):
    resid = models.AutoField(primary_key=True)
    resstart = models.DateField()
    resend = models.DateField()
    nasclient = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    numerochambre = models.ForeignKey(Chambre, on_delete=models.DO_NOTHING)
    nomhotel = models.ForeignKey(Hotel, on_delete=models.DO_NOTHING)

    class Meta:
        db_table='reservation'
    
    def __str__(self):
        return self.resid


class Location(models.Model):
    locationid = models.AutoField(primary_key=True)
    nasclient = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    nasemploye = models.ForeignKey(Employe, on_delete=models.DO_NOTHING)
    numchambre = models.ForeignKey(Chambre, on_delete=models.DO_NOTHING)
    locationstart = models.DateField()
    locationend = models.DateField()
    nomhotel = models.ForeignKey(Hotel, on_delete=models.DO_NOTHING)
    paymentid = models.CharField(max_length=100, null=True, blank=True)  

    class Meta:
        db_table='location'

    def __str__(self):
        return self.locationid