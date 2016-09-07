from django.conf.urls import url
from rsmapweb import views
from django.views.generic import TemplateView
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = format_suffix_patterns([
    url(r'^api/signals/$', views.SignalList.as_view(), name='signal-list'),
    url(r'^api/signal/(?P<pk>[a-zA-Z0-9]+)/$', views.SignalDetail.as_view(), name='signal-detail'),
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^map/$', TemplateView.as_view(template_name='map.html')),
    url(r'^test/$', TemplateView.as_view(template_name='a.html')),
])
