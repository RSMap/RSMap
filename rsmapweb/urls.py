from django.conf.urls import url
from rsmapweb import views
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^api/signals/$', views.SignalList.as_view(), name='signal-list'),
    url(r'^api/signal/(?P<pk>[a-z0-9]+)/$', views.SignalDetail.as_view(), name='signal-detail'),
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^map/$', TemplateView.as_view(template_name='map.html')),
]
