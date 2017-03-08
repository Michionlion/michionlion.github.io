$(document).ready(function () {
	$("#home").click(function () {
		goHome();
	});
	$("#projects").click(function () {
		goProjects();
	});
	$("#contact").click(function () {
		goResume();
	});
	$(window).resize(updateWindowSize);
});

function removeScroll() {
	$("html, #page").addClass("scrollhid");
	var page = $("#page").get();
	$("page").css("paddingRight", page.offsetWidth - page.clientWidth + "px");
}

function doNavPadding() {
	//generalize this by finding inner widths dynamically, and 6 dynamically (2*elements)
	var padding = ((window.innerWidth - (37.656+51.297+50.672)) / 6) + "px";
	// console.log(padding);
	$(".is-nav-padded").css("paddingLeft", padding);
	$(".is-nav-padded").css("paddingRight", padding);
}

function doSizeChecks() {
	var height = window.innerHeight - $(".hero-head").height() - $(".hero-footer").height();
	$("#resume-pdf").css("height", height);
}

function updateWindowSize() {
	doNavPadding();
	doSizeChecks();
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
			//check sizes and switch size (HACKY HACKERMCHACKSON)
			$("#body").html(data);
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
			$("#body").html(data);
		}
	});
}

function goResume() {
	console.log("resume");
	$("#contact").addClass('is-active');
	$("#projects").removeClass('is-active');
	$("#home").removeClass('is-active');
	$.ajax({
		url: 'html/resume.html'
		, dataType: 'html'
		, success: function (data) {
			$("#body").html(data);
			doSizeChecks();
		}
	});
}
