from rest_framework import serializers
from rsmapweb.models import Signal, VEHICLE_TYPE

class SignalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signal
        fields = ('device_id','lat','long','created','level','type',)
