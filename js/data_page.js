

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
var title = $('#download_data h2');
var daily_agg_button = $('.btn_daily_agg');
var hourly_read_button = $('.btn_hour_read');
var link = $('.download_button').children('a');

daily_agg_button.click( function() {
    title.text('Subsystem Data Downloads (Daily Aggregate)');  
    link.each( function() {
        var item = $(this);
        var originalValue = item.attr('href');
        var changedValue = originalValue.replace(/DHW/i, 'HelloItsMe');
        item.attr('href', changedValue);
        // console.log($(this).attr('href'));
      });

});

hourly_read_button.click( function() {
    title.text('Subsystem Data Downloads (Hourly Readings)');
});

