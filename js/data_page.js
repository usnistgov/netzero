

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

var data_file_sizes = {
  "All Subsystems" : {
    hour_size_CSV: "31.9 MB",
    hour_size_JSON: "117.9 MB",
    minute_size_CSV: "1.6 GB",
    minute_size_JSON: "6.6 GB"
  },
  DHW : {
    hour_size_CSV: "5.5 MB",
    hour_size_JSON: "17.2 MB",
    minute_size_CSV: "291 MB",
    minute_size_JSON: "1 GB"
  },
  SHW: {
    hour_size_CSV: "830.3 KB",
    hour_size_JSON: "2.6 MB",
    minute_size_CSV: "52 MB",
    minute_size_JSON: "176.2 MB"
  },
  Elec: {
    hour_size_CSV: "9 MB",
    hour_size_JSON: "40.9 MB",
    minute_size_CSV: "500.5 MB",
    minute_size_JSON: "2.3 GB"
  },
  HVAC: {
    hour_size_CSV:"1.3 MB",
    hour_size_JSON:"3.8 MB",
    minute_size_CSV: "64.3 MB",
    minute_size_JSON: "230.8 MB"
  },
  IndEnv: {
    hour_size_CSV:"5.1 MB",
    hour_size_JSON:"12.6 MB",
    minute_size_CSV: "269.5 MB",
    minute_size_JSON: "737.9 MB"    
  },
  Load: {
    hour_size_CSV:"4.6 MB",
    hour_size_JSON:"25.6 MB",
    minute_size_CSV: "241 MB",
    minute_size_JSON: "1.4 GB"    
  },
  Metadata: {
    hour_size_CSV:"67.1 KB",
    hour_size_JSON:"115.1 KB",
    minute_size_CSV: "67.1 KB",
    minute_size_JSON: "115.1 KB"    
  },
  Misc: {
    hour_size_CSV:"221.8 KB",
    hour_size_JSON:"793.4 KB",
    minute_size_CSV: "32.1 MB",
    minute_size_JSON: "78.7 MB" 
  },
  OutEnv: {
    hour_size_CSV:"539.3 KB",
    hour_size_JSON:"1.3 MB",
    minute_size_CSV: "29.1 MB",
    minute_size_JSON: "92.6 MB"    
  },
  PV: {
    hour_size_CSV:"4.1 MB",
    hour_size_JSON:"10.1 MB",
    minute_size_CSV: "217.7 MB",
    minute_size_JSON: "594.3 MB"     
  },
  SHW: {
    hour_size_CSV:"830.3 KB",
    hour_size_JSON:"2.6 MB",
    minute_size_CSV: "52 MB",
    minute_size_JSON: "176.2 MB" 
  },
  Vent: {
    hour_size_CSV:"1.9 MB",
    hour_size_JSON:"5.4 MB",
    minute_size_CSV: "109.4 MB",
    minute_size_JSON: "331.6 MB" 
  }
};


// Toggle Buttons Functionality
var $title = $('#download_data h2');
var $CSV_button = $('.btn_CSV');
var $JSON_button = $('.btn_JSON');
var $link = $('.download_button').children('a');
var $download_button_div = $('.button_div');
var $minute_file_size = $('.minute_file_size_td');
var $hour_file_size = $('.hour_file_size_td');
var $each_tr = $('#download_data table tbody tr');


$CSV_button.click( function() {
    //changes title of chart
    $title.text('Subsystem Data Downloads (CSV)');

    // changes text on download buttons
    $download_button_div.text('CSV');

    // changes the color of the download buttons
    $download_button_div.css('background-color', '#337ab7');

    // checks 'active' class and adds it if it is not there
    if (!$CSV_button.hasClass('active')) {
        $CSV_button.addClass('active');
        $JSON_button.removeClass('active');
    }

    // changes link names to .csv from .json
    $link.each( function() {
        var item = $(this);
        var originalValue = item.attr('href');
        var changedValue = originalValue.replace(/json/i, 'csv');
        item.attr('href', changedValue);
    });

    // changes file sizes based on button clicked
    $each_tr.each( function() {
        var $eachRow = $(this);
        var $subsystemName = $eachRow.children('td:nth-child(1)').text();
        for (var key in data_file_sizes) {
          if (key == $subsystemName) {
              $eachRow.find('.minute_file_size_td').text(data_file_sizes[key]['minute_size_CSV'])
              $eachRow.find('.hour_file_size_td').text(data_file_sizes[key]['hour_size_CSV'])
          }
        };
    });

});

$JSON_button.click( function() {
    
    $title.text('Subsystem Data Downloads (JSON)');
    
    $download_button_div.text('JSON');
    
    $download_button_div.css('background-color', '#1A3D5C');

    if (!$JSON_button.hasClass('active')) {
        $JSON_button.addClass('active');
        $CSV_button.removeClass('active');
    }

    $link.each( function() {
        var item = $(this);
        var originalValue = item.attr('href');
        var changedValue = originalValue.replace(/csv/i, 'json');
        item.attr('href', changedValue);
      });

    $each_tr.each( function() {
        var $eachRow = $(this);
        var $subsystemName = $eachRow.children('td:nth-child(1)').text();
        for (var key in data_file_sizes) {
          if (key == $subsystemName) {
              $eachRow.find('.minute_file_size_td').text(data_file_sizes[key]['minute_size_JSON'])
              $eachRow.find('.hour_file_size_td').text(data_file_sizes[key]['hour_size_JSON'])
          }
        };
    });
});

