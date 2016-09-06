// $(function(){
//
// });

var markers = [];


$(document).ready(
  function worker(){
    $.ajax(
      {

        url:"http://127.0.0.1:8000/api/signals.json",

        complete: function(){
          setTimeout(worker, 50000);
        }
      }
    ).then(
      function(data)
      {

        deleteMarkers();
        for(var i = 0; i < data.length; i++){
          var signal = data[i];
          console.log(signal);

          var unix = new Date();
          unix.setTime( unix.getTime() - new Date().getTimezoneOffset()*60*1000 );
          console.log(unix.getTime()/1000|0);


          // var date =  Date().getTime();
          // var actual_time = (Math.round(new Date().getTime()/1000));
          // console.log(actual_time);

          var location = new google.maps.LatLng(parseFloat(signal['lat']), parseFloat(signal['long']));
          addMarker(location);
        }
      }
    );
  }
);

function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  markers.push(marker);
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}
