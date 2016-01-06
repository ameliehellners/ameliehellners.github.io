$(".info span").hide();

$(".info").append("<button>Läs mer</button>");

$('button').click(function(){

	$(this).prev().show("slow");

	$(this).remove();
}); 

