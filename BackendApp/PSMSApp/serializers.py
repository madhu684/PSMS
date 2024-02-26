from rest_framework import serializers
from .models import SystemIntegration, UploadedData, BasicConfiguration, MaintenanceAlert

class SystemIntegrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemIntegration
        fields = '__all__'

class UploadedDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UploadedData
        fields = '__all__'

class BasicConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicConfiguration
        fields = '__all__'

class MaintenanceAlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaintenanceAlert
        fields = '__all__'

