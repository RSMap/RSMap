from django.conf.urls import url
from rsmapweb import views

urlpatterns = [
    url(r'^api/signals/$', views.SignalList.as_view(), name='signal-list'),
    url(r'^api/signal/(?P<pk>[a-z0-9]+)/$', views.SignalDetail.as_view(), name='signal-detail'),
]
