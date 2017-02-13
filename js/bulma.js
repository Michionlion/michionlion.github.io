$(document).ready(function () {
	$("#home").click(function () {
		goHome();
	});
	$("#projects").click(function () {
		goProjects();
	});
	$("#contact").click(function () {
		goContact();
	});
	$(window).resize(doNavPadding);
});

function removeScroll() {
	$("html, #page").addClass("scrollhid");
	var page = $("#page").get();
	$("page").css("paddingRight", page.offsetWidth - page.clientWidth + "px");
}

function doNavPadding() {
	//generalize this by finding 130 dynamically, and 6 dynamically (3*elements)
	var padding = parseInt((window.innerWidth - 130) / 6) + "px";
	console.log(padding);
	$(".is-nav-padded").css("paddingLeft", padding);
	$(".is-nav-padded").css("paddingRight", padding);
}

function doVersion() {
	$.ajax({
		url: 'version'
		, dataType: 'text'
		, success: function (data) {
			$("#version").html("v" + data);
		}
	});
}

function goHome() {
	console.log("home");
	$("#home").addClass('is-active');
	$("#projects").removeClass('is-active');
	$("#contact").removeClass('is-active');
	$.ajax({
		url: 'html/home.html'
		, dataType: 'html'
		, success: function (data) {
			$("#body").replaceWith(data);
		}
	});
}

function goProjects() {
	console.log("projects");
	$("#projects").addClass('is-active');
	$("#home").removeClass('is-active');
	$("#contact").removeClass('is-active');
	$.ajax({
		url: 'html/projects.html'
		, dataType: 'html'
		, success: function (data) {
			$("#body").replaceWith(data);
		}
	});
}

function goContact() {
	console.log("contact");
	$("#contact").addClass('is-active');
	$("#projects").removeClass('is-active');
	$("#home").removeClass('is-active');
	$.ajax({
		url: 'html/contact.html'
		, dataType: 'html'
		, success: function (data) {
			$("#body").replaceWith(data);
		}
	});
}