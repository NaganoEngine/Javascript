$(function(){
var url = location.pathname.match(/index.php/g);
var url2 = location.pathname.match(/inquiry_first_page.php/g);
if(url=true){
history.replaceState("","","http://antiraser.info");
}else if(url2=true){
history.replaceState("","","http://antiraser.info/inquiry_first_page");
}

});

