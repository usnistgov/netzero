

$(document).ready( function() {

  var current_width = $(window).width();   
// Data.html DataTable Settings
    $('#download_table').DataTable({
        "paging": false,
        "ordering": false,
        "info": false
    });

//Disable Button Links on mobile devices
  if (current_width <= 679) {
    $('td.download_button a').attr('href', '');
  }

});

// Initializes popovers
$('[data-toggle="popover"]').popover();

function copyToClipboard(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}

// Data Links and File Size JSON

var data_AWS_links = {
  All_Datasets : {
    minute_link_CSV: "https://s3.amazonaws.com/net-zero/2015-data-files/All-Subsystems-minute.csv",
    minute_size_CSV: "1.72 GB",
    hour_link_CSV: "https://s3.amazonaws.com/nist-netzero/2015-data-files/All-Subsystems-hour.csv",
    hour_size_CSV: "33.5 MB",
    minute_link_JSON: "https://s3.amazonaws.com/net-zero/2015-data-files/All-Subsystems-minute.json",
    minute_size_JSON: "7.16 GB",
    hour_link_JSON: "https://s3.amazonaws.com/net-zero/2015-data-files/All-Subsystems-hour.json",
    hour_size_JSON: "117.9 MB"
  },
  DHW : {
    minute_link_CSV: "https://s3.amazonaws.com/net-zero/2015-data-files/DHW-minute.csv",
    minute_size_CSV: "291 MB",
    hour_link_CSV: "https://s3.amazonaws.com/nist-netzero/2015-data-files/DHW-hour.csv",
    hour_size_CSV: "5.5 MB",
    minute_link_JSON: "https://s3.amazonaws.com/net-zero/2015-data-files/DHW-minute.json",
    minute_size_JSON: "1003.6 MB",
    hour_link_JSON: "https://s3.amazonaws.com/net-zero/2015-data-files/DHW-hour.json",
    hour_size_JSON: "17.2 MB"
  } 

}


// Toggle buttons underneath title
var $title = $('#download_data h2');
var $CSV_button = $('.btn_CSV');
var $JSON_button = $('.btn_JSON');
var $link = $('.download_button').children('a');
var $download_button_div = $('.button_div');


$CSV_button.click( function() {
    $title.text('Subsystem Data Downloads (CSV)');
    $download_button_div.text('CSV');
    $link.each( function() {
        var item = $(this);
        var originalValue = item.attr('href');
        var changedValue = originalValue.replace(/json/i, 'csv');
        item.attr('href', changedValue);
      });

});

$JSON_button.click( function() {
    $title.text('Subsystem Data Downloads (JSON)');
    $download_button_div.text('JSON');
    $link.each( function() {
        var item = $(this);
        var originalValue = item.attr('href');
        var changedValue = originalValue.replace(/csv/i, 'json');
        item.attr('href', changedValue);
      });

});

