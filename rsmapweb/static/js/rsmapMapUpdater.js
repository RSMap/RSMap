var markers = [];

// markers icon map
var iconBase = '../static/img/vehicle/';
var icons = {
  connection: {
    icon: iconBase + 'connection-signal.png'
  },
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

// shows bootstrapped messages
bootstrap_alert = function () {}
bootstrap_alert.warning = function (message, alert, timeout) {
    $('<div id="floating_alert" class="alert alert-' + alert + ' fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + message + '&nbsp;&nbsp;</div>').appendTo('body');

    setTimeout(function () {
        $(".alert").alert('close');
    }, timeout);
}

// check if exists devices sending data via rest each 30 secs
function checkDevices(){
  $(function(){
      $.getJSON('http://52.210.3.41/api/signals.json', function(data) {
          if(data.length == 0){
            bootstrap_alert.warning('<strong>INFO:</strong> No devices sending data right now', 'warning', 4000);
          }
      });
  });
}

setInterval( checkDevices, 30000 );


// map update via AJAX
$(document).ready(
  function worker(){
    $.ajax(
      {
        // first one for testing purposes, second one with server address
        // retrieve updated json with last valid signals
	//url:"http://localhost:8000/api/signals.json",
        url:"http://52.210.3.41/api/signals.json",

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
          //console.log(signal);

          var signal_timestamp = parseFloat(signal['created']);
          // convert now to seconds and 2 seconds less
          // (python timestamp comes in seconds)
          // that's the reason to divide by 1k
          var now = ((new Date().getTime()-2000)/1000|0) ;

          // update 'last update' field
          $('.last-update').empty();
          var now_date = new Date();
          $('.last-update').append(now_date);

          // now was reduced 2 seconds so if signal_timestamp is greather than
          // now means it was in a interval between now and 2 secs later
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

  // values are orientative it's may deppend of the road characteristics
  // -1 device connected
  // x > 55.5 heavyweight vehicle
  // 55.5 > x > 45.5 mid vehicle
  // x < 45.5 lightweight vehicle
  var icon = icons['motorcycle'].icon;
  if(level == -1.0){
    icon = icons['connection'].icon;
  } else if(level > 55.5){
    icon = icons['bus'].icon;
  } else if (level > 45.5){
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
