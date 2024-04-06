from django.shortcuts import render
from .models import Chaine, ChaineContact, Hotel, Chambre, HasCommodite, Employe, GestionnaireHotel, Client, Reservation, Location
from .serializers import ChaineSerializer, ChaineContactSerializer, HotelSerializer, ChambreSerializer, HasCommoditeSerializer, EmployeSerializer, GestionnaireSerializer, ClientSerializer, ReservationSerializer, LocationSerializer
from rest_framework import viewsets

# Create your views here.
class ChaineViewSet(viewsets.ModelViewSet):
    queryset = Chaine.objects.all()
    serializer_class = ChaineSerializer

class ChaineContactViewSet(viewsets.ModelViewSet):
    queryset = ChaineContact.objects.all()
    serializer_class = ChaineContactSerializer

class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

class ChambreViewSet(viewsets.ModelViewSet):
    queryset = Chambre.objects.all()
    serializer_class = ChambreSerializer

class HasCommoditeViewSet(viewsets.ModelViewSet):
    queryset = HasCommodite.objects.all()
    serializer_class = HasCommoditeSerializer

class EmployeViewSet(viewsets.ModelViewSet):
    queryset = Employe.objects.all()
    serializer_class = EmployeSerializer

class GestionnaireViewSet(viewsets.ModelViewSet):
    queryset = GestionnaireHotel.objects.all()
    serializer_class = GestionnaireSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


