from django.db import models

# Create your models here.

class Receptor(models.Model):
	STATUS = (
		('ON', 'on'),
		('OFF', 'of')
	)
	id = models.AutoField(primary_key=True)
	location = models.CharField(max_length=100)
	lat = models.FloatField(blank=True, null=True)
	lon = models.FloatField(blank=True, null=True)
	status = models.CharField(max_length=5, choices=STATUS, default="ON")

	def __unicode__(self):
		return self.id

	def __str__(self):
		return str(self.id)
