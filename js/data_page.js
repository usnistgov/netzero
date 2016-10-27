

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
        var changedValue = originalValue.replace(/DHW/i, 'HelloItsMe');
        item.attr('href', changedValue);
      });

});

$JSON_button.click( function() {
    $title.text('Subsystem Data Downloads (JSON)');
    $download_button_div.text('JSON');

});

