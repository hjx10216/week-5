/* =====================
  Set up our map
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
  Lab 2, Part 1 - jQuery


  Task 1: Using javascript, change the HTML to create useful labels for our UI
    *NOTE*: Do not edit part1-jquery.html. You should be able to change the text of an HTML element
            with jQuery alone! Try this: $(<selector>).text('text to set');

  Task 2: Setting (writing) input values
    *NOTE*: An input's value is not the same as an HTML element's text. We use $(selector).val() as
            opposed to $(selector).text() in this case.

  Task 3: Getting (reading) input values

  Task 4: Enable user interaction with the form

  Task 5: Add a button trigger to log this form's object to console

  Task 6: Plot input data to the map on button click

  // STRETCH GOALS
  Task 7: Use default values - OPTIONAL

  Task 8: Try Leaflet's divIcon

  Task 9: Make a parametric function (one that accepts parameters/arguments) to fill the form out.
  
===================== */

$(document).ready(function() {
  // Do your stuff here
  $("#text-label1").text('Object ID');
  $("#text-label2").text('Name');
  $("#text-label3").text('Street Address');
  $("#number-label").text('Age');
  $("#checkbox-label1").text('Male or Female');
  $("#checkbox-label2").text('Love banana or Not');
  $("#color-label").text('Color');
  $("button").text('Plot data');

  $("#text-input1").val('Profile');
  $("#text-input2").val('Monkey');
  $("#text-input3").val('Zoo Street No.05');
  $("#numeric-input").val('6');
  $("#cbox-input1").val(true);
  $("#cbox-input2").val(false);
  $("#color-input").val('#FF0000');


  var dataset = {
    topic: $("#text-input1").val(),
    name: $("#text-input2").val(),
    address: $("#text-input3").val(),
    age: $("#numeric-input").val(),
    sex: $("#cbox-input1").val(),
    banana: $("#cbox-input2").val(),
    color: $("#color-input").val()
  };



  $('#text-input1').prop('disabled', false);
  $('#text-input2').prop('disabled', false);
  $('#text-input3').prop('disabled', false);
  $('#numeric-input').prop('disabled', false);
  $('#cbox-input1').prop('disabled', false);
  $('#cbox-input2').prop('disabled', false);
  $('#color-input').prop('disabled', false);

  var myIcon = L.divIcon({
    className: ('.leaflet-marker-icon'),
    iconSize: [25, 41]
  });


  $('button').click(function() {

    console.log(dataset.banana);

    var inputColor = $("#color-input").val();

    L.circle([39.9522, -75.1639], 200,{color:inputColor})
      .bindPopup(dataset.address)
      .addTo(map);

    L.marker([39.9522, -75.1639], {icon: myIcon})
    .bindPopup(dataset.address)
    .addTo(map);

  });


});
