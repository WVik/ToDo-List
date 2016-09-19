// Set up Event handler
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

//Click on X to delete ToDo
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});
	event.stopPropagation(); //Stops event bubbling 
});

// Check for ENTER key pressed
$('input[type="text"]').keypress(function(event) {
	if (event.which === 13) {
		// Grab text from input
		var todoText = $(this).val();
		//Empty form field
		$(this).val('');
		// Create & add new <li> & <span> to <ul>
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>'); 
	}
});

$('.fa-plus').click(function() {
	$('input[type="text"]').fadeToggle();
});