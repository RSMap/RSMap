from django.test import TestCase
from .models import Receptor

# Create your tests here.
class receptorTest(TestCase):
	def create_receptor(self):
		r = Receptor(location='SP', lat='0.9', lon='3.4', status='ON')
		assert_equal(r.location, 'SP')
		assert_equal(r.lat, '0.9')
		assert_equal(r.lon, '3.4')
		assert_equal(r.status, 'ON')
		print("Sucess!")
