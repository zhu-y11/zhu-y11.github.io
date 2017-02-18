$(document).ready(function() {
    $(".page").each(function(index) {
	      $(this).html($("<h3>").addClass("page-title").text($(this).text()));
        $(this).append($("<hr>"));
	      $(this).append($("<div>").addClass("page-body").load($(this).attr("id") + ".html"));
        console.log($(this).attr("id"));
    });
});
