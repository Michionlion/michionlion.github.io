removeScroll();
$(document).ready(function () {
	$("#home").click(function () {
		$("#home").addClass('is-active');
		$("#projects").removeClass('is-active');
		$("#contact").removeClass('is-active');
		goHome();
	});
	$("#projects").click(function () {
		$("#projects").addClass('is-active');
		$("#home").removeClass('is-active');
		$("#contact").removeClass('is-active');
		goProjects();
	});
	$("#contact").click(function () {
		$("#contact").addClass('is-active');
		$("#projects").removeClass('is-active');
		$("#home").removeClass('is-active');
		goContact();
	});
});

function removeScroll() {
	$("html, #page").addClass("scrollhid");
	var page = $("#page").get();
	$("page").css("paddingRight", page.offsetWidth - page.clientWidth + "px");
}

function goHome() {
	console.log("home");
	var body = $("#body");
	body.replaceWith("<div id=\"body\" class=\"container has-text-centered\"><h1 class=\"title is-2\">Saejin Mahlau-Heinert</h1></div>");
}

function goProjects() {
	console.log("projects");
	var body = $("#body");
	body.replaceWith("<div id=\"body\" class=\"container has-text-centered\"><h1 class=\"title is-2\">Projects</h1></div>");
}

function goContact() {
	console.log("contact");
	var body = $("#body");
	body.replaceWith("<div id=\"body\" class=\"container has-text-centered\"><h1 class=\"title is-2\">Contact me at saejinmh@gmail.com</h1></div>");
}