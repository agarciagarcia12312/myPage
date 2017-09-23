// firebase init
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
// end firebase init


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

// adding the comments
database.ref("/comments").on("child_added", function(snapshot) {
	var snap = snapshot.val();
	var text = $("<div> - " + snap.comments +"</div>");
	// console.log(text);
	$("#text").prepend(text);
})



$(document).ready(function() {

	// flip effect function
	$(".card-grid").flip({
		axis: 'x',
  		trigger: 'hover'
	});
	
	// on click functions that users to a specific section
	$("#name").on("click", function(){
		 $('html, body').animate({
        	scrollTop: 0
    	}, 1500);
	});

	$("#about, #aboutPage").on("click", function(){
		 $('html, body').animate({
        	scrollTop: $("#aboutPage").offset().top-125
    	}, 1500);
	});

	// takes user to projects
	$("#projects, #page2").on("click", function(){
		 $('html, body').animate({
        	scrollTop: $("#page2").offset().top-130
    	}, 1000);
	});
	// takes users to comment section
	$("#commentScroll, #page3").on("click", function(){
		 $('html, body').animate({
        	scrollTop: $("#page3").offset().top-125
    	}, 1500);
		// window.scrollTo(0, $(".commentBox").offset().top);
		// blurPage();
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

//================ for  better user interface ============
	
	// A.G codes Intro ....
	setTimeout(function() {
		$("#initial").fadeOut();
		$(".navBar, #joke").fadeIn(1200);
		$(".container").fadeIn("slow");
		$("#menuIcon, .navBar").fadeIn(1600)
		$("#background").fadeIn()
	},1000);
	setTimeout(function() {
		$("#myLogo").fadeIn()
	},250);

	setTimeout(function() {
		$("#myLogo").fadeOut()
	},1000)
	// ...../
	
	// on scroll functions to blur divs	
	var pxlCount = 0;
	// height of viewing screen
	const screenHeight = $(window).height()/50;
	// height of entire document
	const documentHeight = $(document).height()/50;
	// ratio of viewing screens to document
	const scToDoc = documentHeight / screenHeight;

	const docWidth  = $(window).width();

	// console.log("width: " + docWidth);

	// got the possiton of the section in the document 
	// then added a percentage of the screen size to adjust for the navbar
	const aboutPosition = $("#aboutPage").offset().top/50 + scToDoc/2;
	const pjPosition = $("#page2").offset().top/50 + scToDoc/2;
	const commentPosition = $("#page3").offset().top/50 + scToDoc/2;



	function blurPage () {	
		
	    pxlCount = $(document).scrollTop()/50 ;
	    
	    // the -1 added makes the scrolling blur less sensative
	    p1Change = Math.abs(pxlCount - aboutPosition)-1  ;
	    p2Change = Math.abs(pxlCount - pjPosition)-3 ;
	    p3Change  = Math.abs(pxlCount - commentPosition)-1;
	    // console.log("screenHeight: " + screenHeight);
		// console.log("documentHeight" + documentHeight);
		// console.log("percentage: " + scToDoc);
 		// 	console.log("pxlCount: " + pxlCount);
 		// 	console.log("aboutPosition: " + aboutPosition);
 		// 	console.log("change: " +p1Change);

	    // console.log(commentPosition)
    	// blur first div
	    // console.log(pxlCount)
    	$("#joke, #photCredit").css({"-webkit-filter": "blur("+pxlCount+"px)","-moz-filter": "blur("+pxlCount+"px)","filter": "blur("+pxlCount+"px)" }) ;   
		$("#aboutPage, .me, #summary").css({"-webkit-filter": "blur("+p1Change+"px)","-moz-filter": "blur("+p1Change+"px)","filter": "blur("+p1Change+"px)" }) ;
		$(".p1, .p2, .p3, #page2").css({"-webkit-filter": "blur("+p2Change	+"px)","-moz-filter": "blur("+p2Change	+"px)","filter": "blur("+p2Change	+"px)" }) ;
		$("#page3, #thanks, .commentForm, .commentBox ").css({"-webkit-filter": "blur("+p3Change	+"px)","-moz-filter": "blur("+p3Change	+"px)","filter": "blur("+p3Change	+"px)" }) ;
	

		// project tittle fade in and out
	    if (pxlCount>30 && pxlCount<37) {
	    	$(".pTiitle").fadeIn(1000);
	    } else {
	    	$(".pTiitle").hide(1000);
	    }

	   	// navbar change colors 
	    if (pxlCount>10) {
	    	$("#name").css({
	    		"color": "black"
	    	},3000);

	    	$(".navBar").css({
	    		"background-image": "url(assets/images/wall1.jpg)"
	    	});

	    	$(".sideButtons").css({
	    		"color": "black"
	    	});
	    }
	    // navBar change colors cont....
	    if (pxlCount<10) {
	    	$("#name").css({
	    		"color": "white"
	    	},3000);
	    	$(".navBar").css({
	    		"background": "none"
	    	});
	    	$(".sideButtons").css({
	    		"color": "white"
	    	});
	    }
	}    
	    // console.log(pxlCount)
	    // console.log(commentPosition)
    	// blur first div
    $("#pd1, #pd2, #pd3").hide();	
    // blur page only effictive on screenseize over 700pxl
    if (docWidth> 700 ) {
    	blurPage();
    }
    if (docWidth>400 && docWidth<400) {
    	 $("#pd1, #pd2, #pd3").fadeIn();
    }	
    // hide photo credit on phones
    if (docWidth < 400) {
    	$("#photCredit").hide();
    }
	

	// on scroll functions to blur divs	
	$(window).on('scroll', function () {
		if (docWidth>700) {
			blurPage();
		}
	});
	// menu Icon animate
	var rotateAmount = 0;
	var clickCount =1;
	$("#menuIcon").on("click", function() {
		// console.log("click working")
		
		rotateAmount+=720;

		$(this).animate({rotation:rotateAmount}, {
			duration:500,
			step: function(now, fx) {
              $(this).css({"transform": "rotate(" + now +"deg)"});
              // console.log(now);
     
          }
		})
		// llogin for side navbar fade in and out
		if (clickCount%2) {
			$("#sidebar").slideDown("fast","linear");
		} else {
			$("#sidebar").fadeOut();
		}
		clickCount +=1;
	})
		

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
