
$(document).ready(function() {
	$("#body").load("page1.html");
	$("#page1text").css("color","#a3c6cf");
	$("#page1").click(function() {
		$("#page1text").css("color","#a3c6cf");
		$("#page2text").css("color","white");
		$("#page3text").css("color","white");
		$("#page4text").css("color","white");
		$("#body").load("page1-v2.html");
	});
	$("#page2").click(function() {
		$("#page1text").css("color","white");
		$("#page2text").css("color","#a3c6cf");
		$("#page3text").css("color","white");
		$("#page4text").css("color","white");
		$("#body").load("page2-v2.html");
	});
	$("#page3").click(function() {
		$("#page1text").css("color","white");
		$("#page2text").css("color","white");
		$("#page3text").css("color","#a3c6cf");
		$("#page4text").css("color","white");
		$("#body").load("page3-v2.html");
	});
	$("#page4").click(function() {
		$("#page1text").css("color","white");
		$("#page2text").css("color","white");
		$("#page3text").css("color","white");
		$("#page4text").css("color","#a3c6cf");
		$("#body").load("page4-v2.html");
	});
});

/*
$(document).ready(function() {
	$("#page2").click(function() {
		$("#body").load("resume.htm");
	});
});
*/