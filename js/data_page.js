
// Data.html DataTable Settings
$(document).ready( function() {
    $('#download_table').DataTable({
        "paging": false,
        "ordering": false,
        "info": false
    });
});

// Initializes popovers
$('[data-toggle="popover"]').popover();