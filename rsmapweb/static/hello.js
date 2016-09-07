// $(function(){
//
// });

var markers = [];


$(document).ready(
  function worker(){
    $.ajax(
      {
	
	//url:"http://127.0.0.1:8000/api/signals.json"
        url:"http://52.210.3.41/api/signals.json",

        complete: function(){
          setTimeout(worker, 1000);
        }
      }
    ).then(
      function(data)
      {

        deleteMarkers();
        for(var i = 0; i < data.length; i++){
          var signal = data[i];
          console.log(signal);

          var signal_timestamp = parseFloat(signal['created']);
          // convert now to seconds and one minute less
          // (python timestamp comes in seconds
          // that's the reason to divide by 1k
          var now = ((new Date().getTime()-5000)/1000|0) ;
          console.log("signal timestamp " + signal_timestamp);
          console.log("now " + now);
          console.log("------------");
          $('.greeting-id').empty();
          var now_date = new Date();
          $('.greeting-id').append("Last update " + now_date );
          //var signal_time = new Date()
          // var signal_timestamp = parseFloat(signal['created']);
          //
          // var date_signal = new Date(signal_timestamp * 1000);
          //
          // date_signal = date_signal - new Date().getTimezoneOffset()*60*1000 ;
          //
          // console.log(date_signal);

          // var signal_time = new Date();
          //
          // console.log(signal_time);
          //
          // var now_date = new Date();


          //now_date.setTime( now_date.getTime() - new Date().getTimezoneOffset()*60*1000 );

          //now_date = (now_date.getTime()/1000|0);

          //now_date = now_date - 60000;

          //onsole.log("now_date " + now_date + " " + Date(now_date));

          //var signal_date = parseFloat(signal['created']);

          //console.log("signal_date " + signal_date + " " + Date(signal_date));

          //console.log("-----------");

          //if(now_date <= signal_date){
          if(signal_timestamp > now){
            var location = new google.maps.LatLng(parseFloat(signal['lat']), parseFloat(signal['long']));
            addMarker(location);
          }
          //}
          // var date =  Date().getTime();
          // var actual_time = (Math.round(new Date().getTime()/1000));
          // console.log(actual_time);


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
