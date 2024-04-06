from rest_framework import serializers
from .models import Chaine, ChaineContact, Hotel, Chambre, HasCommodite, Employe, GestionnaireHotel, Client, Reservation, Location

#Create serializers for your models
class ChaineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chaine
        fields = '__all__'

class ChaineContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChaineContact
        fields = '__all__'

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'

class ChambreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chambre
        fields = '__all__'

class HasCommoditeSerializer(serializers.ModelSerializer):
    class Meta:
        model = HasCommodite
        fields = '__all__'

class EmployeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employe
        fields = '__all__'

class GestionnaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = GestionnaireHotel
        fields = '__all__'

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

