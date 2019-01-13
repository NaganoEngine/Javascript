var call=$(function(){
$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

$("div#glayLayer").click(function(){
$(this).hide();
$("div#overLayer").hide();
});

$(document).on("change","input.add",function(){
$("div#glayLayer").show();
$("div#overLayer").show().html("<img src='../../css/2exceed_close_button.png' class='close'/>"+$("+dd",this).html())
.css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});


$("div#overLayer img.close").click(function(){
$("div#glayLayer").hide();
$("div#overLayer").hide();
});
});

if($.browser.msie && $.browser.msie){
$(window).scroll(function(){
$("div#glayLayer").get(0).style.setExpression("top",
"$(document).scrollTop()+'px'");
$("div#overLayer").get(0).style.setExpression("top",
"($(document).scrollTop()+$(window).scrollTop().height()/2)+'px'");
});
}


});
