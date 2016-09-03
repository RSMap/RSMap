from django.shortcuts import render

from django.shortcuts import render, get_object_or_404
from django.template import RequestContext, loader
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render_to_response
from django.core.urlresolvers import reverse
from django.views.generic import TemplateView, FormView
from django.core import serializers

import traceback


# Create your views here.

class HomeView(TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        context = {
            'page': 'home',
            'some_dynamic_value': 'This text comes from django view!',
        }
        
        return self.render_to_response(context)
