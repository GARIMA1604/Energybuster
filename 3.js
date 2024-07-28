document.addEventListener("DOMContentLoaded", function () {
  var uluru = { lat: 28.410446099190406, lng: 77.31289444059993 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var uluru = { lat: 22.80457805308532, lng: 79.71858492621885 };
  var map = new google.maps.Map(document.getElementById("fullMap"), {
    zoom: 4,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  function fMap(event) {
    {
      var la = parseFloat(document.getElementById("input1").value);
      var ln = parseFloat(document.getElementById("input2").value);
      console.log(la);
      console.log(ln);
      var uluru = { lat: la, lng: ln };
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: uluru,
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map,
      });
    }
  }
  document.querySelector("#submit-button").addEventListener("click", fMap);
});
