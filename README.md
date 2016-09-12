# RSMap
Repositorio principal de RSMap


## Tecnologías usadas

*Todas ellas son open source*

### Plataforma IOT

Para administrar los dispositivos generadores de información se usa [KAA](http://www.kaaproject.org/). El SDK es generado en **Java**.

![alt text](http://d2.alternativeto.net/dist/icons/kaa_79182.jpg?width=64&height=64&mode=crop&upscale=false)

### Almacenamiento masivo

Para almacenar la información que reportan los dispositivos se usa [Apache Cassandra](http://cassandra.apache.org/).

![alt text](https://pbs.twimg.com/profile_images/519958997/cassandra_small_normal.png)

### Visualizador de información

Para consultar de manera gráfica la información de Cassandra se usa [Apache Zeppelin](https://zeppelin.apache.org/).

![alt text](https://pbs.twimg.com/profile_images/676753640766312448/NukVX4E1_normal.png)

### Plataforma web

La plataforma web está desarrollada con el framework [Django](https://www.djangoproject.com/) en **Python**, además la api REST se define mediante el módulo [Django Rest Framework](http://www.django-rest-framework.org/http://www.django-rest-framework.org/).

El tema (Bootstrap) usado es: [New Age](http://startbootstrap.com/template-overviews/new-age/) junto a  [AJAX](http://www.w3schools.com/ajax/).

El mapa es proporcionado por [Google Maps API](https://developers.google.com/maps/?hl=es) .

![alt text](https://www.djangoproject.com/s/img/favicon.6dbf28c0650e.ico)
![alt text](https://avatars0.githubusercontent.com/u/11215076?v=3&s=400)

### Instancias

Todas las instancias se ejecutan dentro de [Amazon EC2](https://aws.amazon.com/ec2/).

![alt text](http://cdn.slidesharecdn.com/profile-photo-AmazonWebServices-48x48.jpg?cb=1471098315)
