removeScroll();
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
	goHome();
});

function removeScroll() {
	$("html, #page").addClass("scrollhid");
	var page = $("#page").get();
	$("page").css("paddingRight", page.offsetWidth - page.clientWidth + "px");
}

function goHome() {
	console.log("home");
	$("#home").addClass('is-active');
	$("#projects").removeClass('is-active');
	$("#contact").removeClass('is-active');
	$.ajax({
			url: 'html/home',
			dataType: 'html',
			success: function(data) {
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
			url: 'html/projects',
			dataType: 'html',
			success: function(data) {
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
			url: 'html/contact',
			dataType: 'html',
			success: function(data) {
				$("#body").replaceWith(data);
			}
		});
}
