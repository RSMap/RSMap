from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from datetime import datetime


# Create your models here.

CAR = 'c'
HEAVY = 'h'
LIGHT = 'l'
UNKNOWN = 'u'

VEHICLE_TYPE = (
    (CAR, 'Car'),
    (HEAVY, 'Heavyweight'),
    (LIGHT, 'Lightweight'),
    (UNKNOWN, 'Unknown'),
)


class Signal(models.Model):
    device_id = models.TextField(primary_key=True)
    lat = models.DecimalField(max_digits=9, decimal_places=6)
    long = models.DecimalField(max_digits=9, decimal_places=6)
    created = models.DateTimeField(auto_now=True, blank=True)
    level = models.FloatField()

    type = models.CharField(
        max_length = 1,
        choices = VEHICLE_TYPE,
        default = UNKNOWN,
    )

    def __str__(self):
        return self.device_id
