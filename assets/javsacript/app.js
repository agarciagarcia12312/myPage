$(document).ready(function() {
	
	$("#about").on("click", function(){
		window.scrollTo(0, $("#me").offset().bottom);
	});


	$("#projects").on("click", function(){
		window.scrollTo(0, $("#me").offset().top);
	});

	$("#commentScroll").on("click", function(){
		window.scrollTo(0, $(".commentBox").offset().top);
	});

	$("#open").click(function() {
		$("#form").show();
		$("#open").hide();
	})

	$.ajax({
		url: "https://icanhazdadjoke.com/",
		dataType:"json",
		method:"GET"
	}).done(function(responce) {
		$("#joke").html('"'+ responce.joke + '"');
	});


	

});

