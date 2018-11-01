

$(document).ready( function() {

  var current_width = $(window).width();   
  // Data.html DataTable Settings
  $('#year1_download_table,#year2_download_table').DataTable({
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
