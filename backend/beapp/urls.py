from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

#Create a router
router = DefaultRouter()

#Register ViewSets with the router
router.register(r'chaines', views.ChaineViewSet)
router.register(r'chainecontact', views.ChaineContactViewSet)
router.register(r'hotels', views.HotelViewSet)
router.register(r'chambres', views.ChambreViewSet)
router.register(r'commodites', views.HasCommoditeViewSet)
router.register(r'employes', views.EmployeViewSet)
router.register(r'gestionnaires', views.GestionnaireViewSet)
router.register(r'clients', views.ClientViewSet)
router.register(r'reservations', views.ReservationViewSet)
router.register(r'locations', views.LocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
