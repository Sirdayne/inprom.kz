$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		console.log(th);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),

		}).done(function() {
            
            //$(".modal-1").fadeOut("fast");
            alert('С вами свяжется наш специалист');
            
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});