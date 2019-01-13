$(function(){
$("input#uploadfile_1").change(function(event){
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
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("span#uploadfile_1").html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>");
}
else if(!file_type.match("image/")){
$("span#uploadfile_1").html("<font color='red'>画像形式でアップロードしてください。</font><br>");
} 
else{
$("img#uploadfile_1").remove();
//新規ファイル入力情報
$("div#uploadfile_1").after('<div align="center"><img id="uploadfile_1" class="img" width="120px" height="90px" style="margin-bottom:10px; margin-top:10px"></div>');
$("span#uploadfile_1").html(
'<br><br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'
);
window.onload = function(){
if(localStorage.background){
$("img#uploadfile_1").attr("src",localStorage.background);
}
}
}
});
});

$(function(){
$("input#uploadfile_2").change(function(event){

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
$("span#uploadfile_2").html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_2").html("<font color='red'>画像形式でアップロードしてください。</font><br>");
}else{
$("img#uploadfile_2").remove();
//新規ファイル入力情報
$("div#uploadfile_2").after('<div align="center"><img id="uploadfile_2" class="img" width="120px" height="90px" style="margin-bottom:10px; margin-top:10px"></div>');
$("span#uploadfile_2").html(
'<br><br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'
);
window.onload = function(){
if(localStorage.background){
$("img#uploadfile_2").attr("src",localStorage.background);
}
}
}
});
});

$(function(){
$("input#uploadfile_3").change(function(event){

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
$("span#uploadfile_3").html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_3").html("<font color='red'>画像形式でアップロードしてください。</font><br>");
}else{
$("img#uploadfile_3").remove();
//新規ファイル入力情報
$("div#uploadfile_3").after('<div align="center"><img id="uploadfile_3" class="img" width="120px" height="90px" style="margin-bottom:10px; margin-top:10px"></div>');
$("span#uploadfile_3").html(
'<br><br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'
);
window.onload = function(){
if(localStorage.background){
$("img#uploadfile_3").attr("src",localStorage.background);
}
}
}
});
});

$(function(){
$("input#uploadfile_4").change(function(event){

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
$("span#uploadfile_4").html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_4").html("<font color='red'>画像形式でアップロードしてください。</font><br>");
}else{
$("img#uploadfile_4").remove();
//新規ファイル入力情報
$("div#uploadfile_4").after('<div align="center"><img id="uploadfile_4" class="img" width="120px" height="90px" style="margin-bottom:10px; margin-top:10px"></div>');
$("span#uploadfile_4").html(
'<br><br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'
);
window.onload = function(){
if(localStorage.background){
$("img#uploadfile_4").attr("src",localStorage.background);
}
}
}
});
});

$(function(){
$("input#uploadfile_5").change(function(event){

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
$("span#uploadfile_5").html("<font color='red'>ファイルサイズは500MB以内に収めて下さい。</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_5").html("<font color='red'>画像形式でアップロードしてください。</font><br>");
}else{
$("img#uploadfile_5").remove();
//新規ファイル入力情報
$("div#uploadfile_5").after('<div align="center"><img id="uploadfile_5" class="img" width="120px" height="90px" style="margin-bottom:10px; margin-top:10px"></div>');
$("span#uploadfile_5").html(
'<br><br>'+'Filename:&nbsp;'+file.name +'<br>'+
'Filesize/Byte:&nbsp;'+Number(file.size) +'byte'+ '<br>'+
'Filesize/KB:&nbsp;'+Number(file.size/1024).toFixed(2)+"KB"+ '<br>'+
'Filesize/MB:&nbsp;'+Number((file.size/1024)/1024).toFixed(2)+"MB"+ '<br>'+
'Filetype:&nbsp;'+file.type + '<br>' +
'lastModifiedDate:&nbsp;'+file.lastModifiedDate+'<br>'
);
window.onload = function(){
if(localStorage.background){
$("img#uploadfile_5").attr("src",localStorage.background);
}
}
}
});
});

$(function(){
//ALL_CLEAR
$("input[name='cancel']").click(function(){
$("input[name='owner']").val("");
$("input[name='upload_file[]']").val("");
$("span.spandes").html("");
$("div.divdes").html("");
$("img.img").remove();
localStorage.clear();
});
});
if(location.reload){
//ALL_CLEAR
$("input[name='owner']").val("");
$("input[name='upload_file[]']").val("");
$("span.spandes").html("");
$("div.divdes").html("");
$("img.img").remove();
localStorage.clear();
}

