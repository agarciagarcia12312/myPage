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
	// console.log(text);
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

	function newJoke () {	
		$.ajax({
			url: "https://icanhazdadjoke.com/",
			dataType:"json",
			method:"GET"
		}).done(function(responce) {
			$("#joke").html('"'+ responce.joke + '"');
		});
	}
	newJoke();	

	$("#joke").on("click", function() {
		newJoke();
	})

//================for  better user interface============
	
	setTimeout(function() {
		$("#initial").fadeOut();
		$("#sidebar").fadeIn("slow");
		$(".navBar").fadeIn("slow");
	},1500);
	setTimeout(function() {
		$("#myLogo").fadeIn()
	},500)


	// project tittle appers on mouseover
	$("#pic1").mouseover(function(){
   		$("#t1").fadeIn();
	});
	$("#pic1").mouseout(function(){
   		$("#t1").fadeOut();
	});

	$("#pic2").mouseover(function(){
   		$("#t2").fadeIn();
	});

	$("#pic2").mouseout(function(){
   		$("#t2").fadeOut();
	});

	$("#pic3").mouseover(function(){
   		$("#t3").fadeIn();
	});
	$("#pic3").mouseout(function(){
   		$("#t3").fadeOut();
	});
	// end of mouseover functions


	

});

// $("#p2").hover(function() {
// 		console.log("hover");
	
// 	  });