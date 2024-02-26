from django.urls import path, include
from PSMSApp.views import SystemIntegrationView, upload_data, test_system_integration, basic_configuration_view, MaintenanceAlertList, MaintenanceAlertUpdate
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/system-integration/', SystemIntegrationView.as_view(), name='system_integration'),
    path('api/upload-data/', upload_data, name='upload_data'),
    path('api/test-system-integration', test_system_integration, name='test_system_integration'),
    path('api/basic-configuration/', basic_configuration_view, name='basic_configuration'),
    path('api/alerts/', MaintenanceAlertList.as_view(), name='alert-list'),
    path('api/alerts/<int:pk>/', MaintenanceAlertUpdate.as_view(), name='alert-update'),
]
