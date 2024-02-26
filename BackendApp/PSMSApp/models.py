from django.db import models

class SystemIntegration(models.Model):
    name = models.CharField(max_length=100)
    api_endpoint = models.URLField()
    auth_key = models.CharField(max_length=200)
    integration_type = models.CharField(max_length=50)

class UploadedData(models.Model):
    name = models.CharField(max_length=100)
    data_file = models.FileField(upload_to='uploads/')
    data_type = models.CharField(max_length=50)  # New field for data type
    valid_date = models.DateField()  # New field for valid date
    uploaded_at = models.DateTimeField(auto_now_add=True)

class BasicConfiguration(models.Model):
    alert_thresholds = models.CharField(max_length=255)
    data_retention_policy = models.CharField(max_length=255)
    performance_baselines = models.CharField(max_length=255)
    feedback_channels = models.CharField(max_length=255)

class MaintenanceAlert(models.Model):
    message = models.TextField()
    is_resolved = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

