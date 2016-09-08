var markers = [];


var iconBase = '../static/img/vehicle/';
var icons = {
  car: {
    icon: iconBase + 'car.png'
  },
  bus: {
    icon: iconBase + 'bus.png'
  },
  motorcycle: {
    icon: iconBase + 'motorcycle.png'
  }
};

$(document).ready(
  function worker(){
    $.ajax(
      {
        // first one for testing purposes, second one with server address
        // retrieve updated json with last valid signals
	      url:"http://127.0.0.1:8000/api/signals.json",
        //url:"http://52.210.3.41/api/signals.json",

        complete: function(){
          // next call will be in 1 second
          setTimeout(worker, 1000);
        }
      }
    ).then(
      function(data)
      {
        //clean map
        deleteMarkers();

        // run all json markers and add them to map
        for(var i = 0; i < data.length; i++){
          var signal = data[i];
          console.log(signal);

          var signal_timestamp = parseFloat(signal['created']);
          // convert now to seconds and 5 seconds less
          // (python timestamp comes in seconds)
          // that's the reason to divide by 1k
          var now = ((new Date().getTime()-5000)/1000|0) ;

          // update 'last update' field
          $('.last-update').empty();
          var now_date = new Date();
          $('.last-update').append(now_date);

          // now was reduced 5 seconds so if signal_timestamp is greather than
          // now means it was in a interval between now and 5 secs later
          if(signal_timestamp > now){
            var location = new google.maps.LatLng(parseFloat(signal['lat']), parseFloat(signal['long']));
            var level = signal['level'];
            addMarker(location, level);
          }
        }
      }
    );
  }
);


// return an icon depending of the signal level
function getIcon(level){
  level = parseFloat(level);

  // values are orientative
  var icon = icons['motorcycle'].icon;
  if(level > 80.5){
    icon = icons['bus'].icon;
    console.log("bus");
  } else if (level > 30.5){
    console.log("coche");
    icon = icons['car'].icon;
  }

  return icon;
}

// adds new marker to map
function addMarker(location, level) {
  var marker = new google.maps.Marker({
    position: location,
    icon: getIcon(level),
    map: map
  });
  markers.push(marker);
}

// set all markers on maps, mostly used to clean map markers
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// set all markers to null map
function clearMarkers() {
  setMapOnAll(null);
}

// clear marker data vector
function deleteMarkers() {
  clearMarkers();
  markers = [];
}
