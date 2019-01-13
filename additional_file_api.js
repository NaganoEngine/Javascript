//HTML_READ_FINISH

<!-------------------------------------------------------ADITIONAL_DIVISION---------------------------------------------------------------!>
//参照配列
a=1; 
ida=new Array();
ida[0]=" id=uploadfile_1";
ida[1]=" id=uploadfile_2";
ida[2]=" id=uploadfile_3";
ida[3]=" id=uploadfile_4";
ida[4]=" id=uploadfile_5";

b=1; 
idb=new Array();
idb[0]=" id=uploadfile_1";
idb[1]=" id=uploadfile_2";
idb[2]=" id=uploadfile_3";
idb[3]=" id=uploadfile_4";
idb[4]=" id=uploadfile_5";

d=1; 
idd=new Array();
idd[0]=" id=uploadfile_1";
idd[1]=" id=uploadfile_2";
idd[2]=" id=uploadfile_3";
idd[3]=" id=uploadfile_4";
idd[4]=" id=uploadfile_5";

k=1;
cancel=new Array();
cancel[0]=' id="cancel_1"';
cancel[1]=' id="cancel_2"';
cancel[2]=' id="cancel_3"';
cancel[3]=' id="cancel_4"';
cancel[4]=' id="cancel_5"';

c=1;
cli=new Array();//CLICK_REPLACE
cli[0]='<input type="button" id="btn_add_0" class="plus" value="PLUS+FILE">';
cli[1]='<input type="button" id="btn_add_1" class="plus" value="PLUS+FILE">';
cli[2]='<input type="button" id="btn_add_2" class="plus" value="PLUS+FILE">';
cli[3]='<input type="button" id="btn_add_3" class="plus" value="PLUS+FILE">';
cli[4]='<input type="button" id="btn_add_4" class="plus" value="PLUS+FILE">';

//Click
$('#btn_add_0').click(function(){
var input_figure = $("input.add").length;
var new_files    ='<dd><input type="file" name="upload_file[]" class="add" multiple  '+ida[a++]+'>'+'<input type="button" name="cancel"'+cancel[k++]+' class="can"  value="CANCEL">'+'<span '+idb[b++]+' class="spandes"></span>'+'<div '+idd[d++]+' class="divdes"></div></dd>';

if(input_figure == 5){
return false;//SCRIPT_STOP
}
$("div#set").append(new_files);
// 削除ボタンの一旦全消去し、配置し直す
$('input.can').remove();
var  
re_1='<input type="button" name="cancel" id="cancel_1" class="can"  value="CANCEL">';
re_2='<input type="button" name="cancel" id="cancel_2" class="can"  value="CANCEL">';
re_3='<input type="button" name="cancel" id="cancel_3" class="can"  value="CANCEL">';
re_4='<input type="button" name="cancel" id="cancel_4" class="can"  value="CANCEL">';
re_5='<input type="button" name="cancel" id="cancel_5" class="can"  value="CANCEL">';
$("input#uploadfile_1").after(re_1);
$("input#uploadfile_2").after(re_2);
$("input#uploadfile_3").after(re_3);
$("input#uploadfile_4").after(re_4);
$("input#uploadfile_5").after(re_5);
});
<!----------------------------------------------CANGE_FILE_API---------------------------------------------------------------------------!>	 
$(function(){
$("input#uploadfile_1").change(function(event){
$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

$(document).on("click","div#glayLayer",function(){
$(this).remove();
$("div#overLayer").remove();
});

$(document).on("click","div#overLayer img.close",function(){
$("div#glayLayer").remove();
$("div#overLayer").remove();
});	
	
var hantei = new Array();
i=0;
//file_Object
    file = event.target.files[0];
    file_name  = file.name;
    file_size  = file.size;
    file_type  = file.type;

//file_reader
var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
//data URLを取得
var dataURL = reader.result;
//data URLを背景に設定
$("img#uploadfile_1").attr("src",dataURL);
//data URLをlocalStorageに保存
localStorage.background = dataURL;
}//onload

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("div#glayLayer").show();	
$("div#overLayer").show().html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>").css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
}//if
else if(file_type.match(/[application\audio\font\example\image\message\model\multipart\text\video]/g)===null){
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<font size="5" color="red"><b>Non-Specified-Extention</b></font></div>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out

}//elseif 
else{
$("img#uploadfile_1").remove();
//新規ファイル入力情報
//新規ファイル入力情報
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<img id="uploadfile_1" class="img" width="240px" height="180px" style="margin-bottom:10px; margin-top:10px"></div>'+'<font size="3"><b>'+
'<br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'+'</b></font>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out

if($.browser.msie && $.browser.msie){
$(window).scroll(function(){
$("div#glayLayer").get(0).style.setExpression("top",
"$(document).scrollTop()+'px'");
$("div#overLayer").get(0).style.setExpression("top",
"($(document).scrollTop()+$(window).scrollTop().height()/2)+'px'");
});
}//if

window.onload = function(){
if(localStorage.background){
$("img#uploadfile_1").attr("src",localStorage.background);
}//if

}//onload
}//else

});//change

});//raady



<!----------------------------------------------CANGE_FILE_API_2---------------------------------------------------------------------------!>
$(function(){
$(document).on("change","input#uploadfile_2",function(event){
$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

$(document).on("click","div#glayLayer",function(){
$(this).remove();
$("div#overLayer").remove();
});

$(document).on("click","div#overLayer img.close",function(){
$("div#glayLayer").remove();
$("div#overLayer").remove();
});	
	
var hantei = new Array();
i=0;
//file_Object
    file = event.target.files[0];
    file_name  = file.name;
    file_size  = file.size;
    file_type  = file.type;

//file_reader
var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
//data URLを取得
var dataURL = reader.result;
//data URLを背景に設定
$("img#uploadfile_2").attr("src",dataURL);
//data URLをlocalStorageに保存
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("div#glayLayer").show();	
$("div#overLayer").show().html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>").css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
}
else if(file_type.match(/[application\audio\font\example\image\message\model\multipart\text\video]/g)===null){
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<font size="5" color="red"><b>Non-Specified-Extention</b></font></div>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out
} 
else{
$("img#uploadfile_2").remove();
//新規ファイル入力情報
//新規ファイル入力情報
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<img id="uploadfile_2" class="img" width="240px" height="180px" style="margin-bottom:10px; margin-top:10px"></div>'+'<font size="3"><b>'+
'<br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'+'</b></font>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out

if($.browser.msie && $.browser.msie){
$(window).scroll(function(){
$("div#glayLayer").get(0).style.setExpression("top",
"$(document).scrollTop()+'px'");
$("div#overLayer").get(0).style.setExpression("top",
"($(document).scrollTop()+$(window).scrollTop().height()/2)+'px'");
});
}

window.onload = function(){
if(localStorage.background){
$("img#uploadfile_2").attr("src",localStorage.background);
}
}
}
});
});

<!----------------------------------------------CANGE_FILE_API_3---------------------------------------------------------------------------!>
$(function(){
$(document).on("change","input#uploadfile_3",function(event){
$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

$(document).on("click","div#glayLayer",function(){
$(this).remove();
$("div#overLayer").remove();
});

$(document).on("click","div#overLayer img.close",function(){
$("div#glayLayer").remove();
$("div#overLayer").remove();
});	
	
var hantei = new Array();
i=0;
//file_Object
    file = event.target.files[0];
    file_name  = file.name;
    file_size  = file.size;
    file_type  = file.type;

//file_reader
var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
//data URLを取得
var dataURL = reader.result;
//data URLを背景に設定
$("img#uploadfile_3").attr("src",dataURL);
//data URLをlocalStorageに保存
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("div#glayLayer").show();	
$("div#overLayer").show().html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>").css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
}
else if(file_type.match(/[application\audio\font\example\image\message\model\multipart\text\video]/g)===null){
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<font size="5" color="red"><b>Non-Specified-Extention</b></font></div>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out
} 
else{
$("img#uploadfile_3").remove();
//新規ファイル入力情報
//新規ファイル入力情報
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<img id="uploadfile_3" class="img" width="240px" height="180px" style="margin-bottom:10px; margin-top:10px"></div>'+'<font size="3"><b>'+
'<br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'+'</b></font>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out

if($.browser.msie && $.browser.msie){
$(window).scroll(function(){
$("div#glayLayer").get(0).style.setExpression("top",
"$(document).scrollTop()+'px'");
$("div#overLayer").get(0).style.setExpression("top",
"($(document).scrollTop()+$(window).scrollTop().height()/2)+'px'");
});
}

window.onload = function(){
if(localStorage.background){
$("img#uploadfile_3").attr("src",localStorage.background);
}
}
}
});
});

<!----------------------------------------------CANGE_FILE_API_4---------------------------------------------------------------------------!>
$(function(){
$(document).on("change","input#uploadfile_4",function(event){
$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

$(document).on("click","div#glayLayer",function(){
$(this).remove();
$("div#overLayer").remove();
});

$(document).on("click","div#overLayer img.close",function(){
$("div#glayLayer").remove();
$("div#overLayer").remove();
});	
	
var hantei = new Array();
i=0;
//file_Object
    file = event.target.files[0];
    file_name  = file.name;
    file_size  = file.size;
    file_type  = file.type;

//file_reader
var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
//data URLを取得
var dataURL = reader.result;
//data URLを背景に設定
$("img#uploadfile_4").attr("src",dataURL);
//data URLをlocalStorageに保存
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("div#glayLayer").show();	
$("div#overLayer").show().html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>").css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
}
else if(file_type.match(/[application\audio\font\example\image\message\model\multipart\text\video]/g)===null){
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<font size="5" color="red"><b>Non-Specified-Extention</b></font></div>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out
} 
else{
$("img#uploadfile_4").remove();
//新規ファイル入力情報
//新規ファイル入力情報
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<img id="uploadfile_4" class="img" width="240px" height="180px" style="margin-bottom:10px; margin-top:10px"></div>'+'<font size="3"><b>'+
'<br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'+'</b></font>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out

if($.browser.msie && $.browser.msie){
$(window).scroll(function(){
$("div#glayLayer").get(0).style.setExpression("top",
"$(document).scrollTop()+'px'");
$("div#overLayer").get(0).style.setExpression("top",
"($(document).scrollTop()+$(window).scrollTop().height()/2)+'px'");
});
}

window.onload = function(){
if(localStorage.background){
$("img#uploadfile_4").attr("src",localStorage.background);
}
}
}
});
});
<!----------------------------------------------CANGE_FILE_API_5---------------------------------------------------------------------------!>
$(function(){
$(document).on("change","input#uploadfile_5",function(event){
$("body").append("<div id='glayLayer'></div><div id='overLayer'></div>");

$(document).on("click","div#glayLayer",function(){
$(this).remove();
$("div#overLayer").remove();
});

$(document).on("click","div#overLayer img.close",function(){
$("div#glayLayer").remove();
$("div#overLayer").remove();
});	
	
var hantei = new Array();
i=0;
//file_Object
    file = event.target.files[0];
    file_name  = file.name;
    file_size  = file.size;
    file_type  = file.type;

//file_reader
var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
//data URLを取得
var dataURL = reader.result;
//data URLを背景に設定
$("img#uploadfile_5").attr("src",dataURL);
//data URLをlocalStorageに保存
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("div#glayLayer").show();	
$("div#overLayer").show().html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>").css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
}
else if(file_type.match(/[application\audio\font\example\image\message\model\multipart\text\video]/g)===null){
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<font size="5" color="red"><b>Non-Specified-Extention</b></font></div>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out
} 
else{
$("img#uploadfile_5").remove();
//新規ファイル入力情報
//新規ファイル入力情報
$("div#glayLayer").show();
$("div#overLayer").show().html('<div align="center"><img src="../css/close_button_white30.png" class="close"/>'+'<img id="uploadfile_5" class="img" width="240px" height="180px" style="margin-bottom:10px; margin-top:10px"></div>'+'<font size="3"><b>'+
'<br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'+'</b></font>').css({
marginTop:"-"+$("div#overLayer").height()/2+"px",
marginLeft:"-"+$("div#overLayer").width()/2+"px"
});
a="../css/close_button_gray30.png";
b="../css/close_button_white30.png";
$("img.close").mouseover(function(){
$(this).attr("src",a)
}).mouseout(function(){
$(this).attr("src",b)
});//over_out

if($.browser.msie && $.browser.msie){
$(window).scroll(function(){
$("div#glayLayer").get(0).style.setExpression("top",
"$(document).scrollTop()+'px'");
$("div#overLayer").get(0).style.setExpression("top",
"($(document).scrollTop()+$(window).scrollTop().height()/2)+'px'");
});
}

window.onload = function(){
if(localStorage.background){
$("img#uploadfile_5").attr("src",localStorage.background);
}
}
}
});
});

<!---------------------------------------------------CANCEL_CLICK-------------------------------------------------------------------!>
var cancel=$("input.add").length;
$(document).on("click","input#cancel_1",function(first){
first=$("input#uploadfile_1").val("");
      $("span#uploadfile_1").html("");
      $("div#uploadfile_1").html("");
      $("img#uploadfile_1").remove();
      localStorage.clear();
});

$(document).on("click","input#cancel_2",function(second){
second=$("input#uploadfile_2").val("");
       $("span#uploadfile_2").html("");
       $("div#uploadfile_2").html("");
       $("img#uploadfile_2").remove();
       localStorage.clear();
});
	  
$(document).on("click","input#cancel_3",function(third){
third=$("input#uploadfile_3").val("");
      $("span#uploadfile_3").html("");
      $("div#uploadfile_3").html("");
      $("img#uploadfile_3").remove();
      localStorage.clear();
});
	  
$(document).on("click","input#cancel_4",function(forth){
forth=$("input#uploadfile_4").val("");
      $("span#uploadfile_4").html("");
      $("div#uploadfile_4").html("");
      $("img#uploadfile_4").remove();
      localStorage.clear();
});
	  
$(document).on("click","input#cancel_5",function(five){
five=$("input#uploadfile_5").val("");
      $("span#uploadfile_5").html("");
      $("div#uploadfile_5").html("");
      $("img#uploadfile_5").remove();
      localStorage.clear();	 	 
});

<!--------------------------------------------------RELOAD-----------------------------------------------------------------------!>
if(location.reload){
//ALL_CLEAR
$("input[name='owner']").val("");
$("input[name='upload_file[]']").val("");
$("span.spandes").html("");
$("div.divdes").html("");
$("img.img").remove();
localStorage.clear();
}
<!-------------------------------------------------------------------------------------------------------------------------!>






















