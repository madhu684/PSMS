from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SystemIntegration, UploadedData, BasicConfiguration, MaintenanceAlert
from .serializers import SystemIntegrationSerializer, UploadedDataSerializer, BasicConfigurationSerializer, MaintenanceAlertSerializer
from rest_framework import status,generics
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser

class SystemIntegrationView(APIView):
    def post(self, request):
        serializer = SystemIntegrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def upload_data(request):
    serializer = UploadedDataSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def test_system_integration(request):
    # Here, implement your logic to test integration based on the request data
    # For demonstration, assuming the test is always successful
    return Response({"message": "Test integration successful"}, status=200)

@api_view(['GET', 'POST'])
def basic_configuration_view(request):
    if request.method == 'GET':
        configs = BasicConfiguration.objects.all()
        serializer = BasicConfigurationSerializer(configs, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = BasicConfigurationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MaintenanceAlertList(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        hardcoded_data = [
             {"id": 1, "message": "CPU usage exceeds 90%", "is_resolved": False},
            {"id": 2, "message": "Disk space less than 10GB", "is_resolved": False},
            {"id": 3, "message": "Database response time over 2 seconds", "is_resolved": True},
            {"id": 4, "message": "New software version available", "is_resolved": False},
            {"id": 5, "message": "Memory usage exceeds 80%", "is_resolved": True},
            # Add more sample data as needed
        ]
        return Response(hardcoded_data)

class MaintenanceAlertUpdate(generics.UpdateAPIView):
    queryset = MaintenanceAlert.objects.all()
    serializer_class = MaintenanceAlertSerializer
