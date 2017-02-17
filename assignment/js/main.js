/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


/* =====================

===================== */

var removeMarkers = function(a) {
  _.each(
    a,function(aa){
      map.removeLayer(aa);
    }
  );
};

/* =====================

===================== */


$(document).ready(function() {
  // Do your stuff here


  $('button').click(function() {

    //$("#text-input1").val('https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-solar-installations.json');
    var Url = $("#text-input1").val();
    var downloadData = $.ajax(Url);

    var Lat = $("#numeric-input1").val();
    var Lon = $("#numeric-input2").val();

    var parseData = function(a) {return JSON.parse(a)};

    var makeMarkers = function(a) {
      return _.map(a,function(aa){
          return L.marker([aa[Lat], aa[Lon]]);
        });
      };

    var plotMarkers = function(a) {
      _.each(a,function(aa){aa.addTo(map);});
    };

    downloadData.done(function(data) {
      var parsed = parseData(data);
      var markers = makeMarkers(parsed);
      console.log(parseData(data));
      plotMarkers(markers);
      //removeMarkers(markers);
    });
  });


});
