
$(function(){

$("img#top").mouseover(function(){
$(this).attr("src","css/navi_bar/navi_top_press.png").mouseout(function(){
$(this).attr("src","css/navi_bar/navi_top.png");
});
});
$("img#top").click(function($se1){
$se1=window.location.href="http://antiraser.info/";    
});

$("img#company").mouseover(function(){
$(this).attr("src","css/navi_bar/navi_company_press.png").mouseout(function(){
$(this).attr("src","css/navi_bar/navi_company.png");
});
});
$("img#company").click(function(){
$("div#load").load("navi_page/company.php");    
});


$("img#deal").mouseover(function(){
$(this).attr("src","css/navi_bar/navi_deal_press.png").mouseout(function(){
$(this).attr("src","css/navi_bar/navi_deal.png");
});
});
$("img#deal").click(function(){
$("div#load").load("navi_page/deal.php");    
});

$("img#inquiry").mouseover(function(){
$(this).attr("src","css/navi_bar/navi_inquiry_press.png").mouseout(function(){
$(this).attr("src","css/navi_bar/navi_inquiry.png");
});
});
$("img#inquiry").click(function($se2){
$se2=window.location.href="http://antiraser.info/navi_page/inquiry_first_page.php";   
});

$("img#blog").mouseover(function(){
$(this).attr("src","css/navi_bar/navi_blog_press.png").mouseout(function(){
$(this).attr("src","css/navi_bar/navi_blog.png");
});
});
$("img#blog").click(function(){
$("div#load").load("navi_page/blog.php");     
});

});
