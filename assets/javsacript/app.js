var config = {
    apiKey: "AIzaSyAxoG5-rMlRl4ZTDO7_v3J9Au8utaavCvM",
    authDomain: "mypage-558cd.firebaseapp.com",
    databaseURL: "https://mypage-558cd.firebaseio.com",
    projectId: "mypage-558cd",
    storageBucket: "mypage-558cd.appspot.com",
    messagingSenderId: "658921323924"
};
firebase.initializeApp(config);
var database = firebase.database();

var commentsRef = database.ref("/comments");

// commentsRef.on()

$("#commenSubmit").on("click", function () {
	event.preventDefault();
	$("#form").hide();
	$("#thanks").show();
	var newComment = $("#comment").val().trim();
	$("comment").html(" ");


	database.ref("/comments").push({
		comments: newComment
	});

});

database.ref("/comments").on("child_added", function(snapshot) {
	var snap = snapshot.val();
	var text = $("<div> - " + snap.comments +"</div>");
	console.log(text);
	$("#text").prepend(text);
})



$(document).ready(function() {
	
	$("#about").on("click", function(){
		window.scrollTo(0, $("#me").offset().bottom);
	});


	$("#projects").on("click", function(){
		window.scrollTo(0, $("#spot").offset().top);
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

