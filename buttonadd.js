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
//data URL���擾
var dataURL = reader.result;
//data URL��w�i�ɐݒ�
$("img#uploadfile_1").attr("src",dataURL);
//data URL��localStorage�ɕۑ�
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("span#uploadfile_1").html("<font color='red'>�t�@�C���T�C�Y��500MB�ȓ��Ɏ��߂ĉ������B</font><br>");
}
else if(!file_type.match("image/")){
$("span#uploadfile_1").html("<font color='red'>�摜�`���ŃA�b�v���[�h���Ă��������B</font><br>");
} 
else{
$("img#uploadfile_1").remove();
//�V�K�t�@�C�����͏��
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
/*---------------------------------------------uploadfile_1-------------------------------------------------------------------------*/

jQuery(document).ready(function($) {
  var prefix_file_list = 'file_list_'; 
// �i�ړ��͗���name�����̐ړ���

// "�i�ڂ̒ǉ�"�{�^�����������ꍇ�̏���
	
$('#btn_add').click(function(){
// �i�ړ��͗���ǉ�
var i=1; i++;  
var len_list = $('#file_list > li').length;
var idd=" id=uploadfile_"+i;
var new_list = '<li><input type=file name=upload_file[] multiple '+ idd +"></li>";
var new_span_div= '<span class="spandes"'+idd+'></span>'+'<div '+idd+' class="divdes"></div>';


if(len_list == 5)
{
return false;
}
$('#file_list').append(new_list).append(new_span_div);

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
//data URL���擾
var dataURL = reader.result;
//data URL��w�i�ɐݒ�
$("img#uploadfile_2").attr("src",dataURL);
//data URL��localStorage�ɕۑ�
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("span#uploadfile_2").html("<font color='red'>�t�@�C���T�C�Y��500MB�ȓ��Ɏ��߂ĉ������B</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_2").html("<font color='red'>�摜�`���ŃA�b�v���[�h���Ă��������B</font><br>");
}else{
$("img#uploadfile_2").remove();
//�V�K�t�@�C�����͏��
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

/*---------------------------------------------uploadfile_2-------------------------------------------------------------------------*/
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
//data URL���擾
var dataURL = reader.result;
//data URL��w�i�ɐݒ�
$("img#uploadfile_3").attr("src",dataURL);
//data URL��localStorage�ɕۑ�
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("span#uploadfile_3").html("<font color='red'>�t�@�C���T�C�Y��500MB�ȓ��Ɏ��߂ĉ������B</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_3").html("<font color='red'>�摜�`���ŃA�b�v���[�h���Ă��������B</font><br>");
}else{
$("img#uploadfile_3").remove();
//�V�K�t�@�C�����͏��
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
/*---------------------------------------------uploadfile_3-------------------------------------------------------------------------*/


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
//data URL���擾
var dataURL = reader.result;
//data URL��w�i�ɐݒ�
$("img#uploadfile_4").attr("src",dataURL);
//data URL��localStorage�ɕۑ�
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("span#uploadfile_4").html("<font color='red'>�t�@�C���T�C�Y��500MB�ȓ��Ɏ��߂ĉ������B</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_4").html("<font color='red'>�摜�`���ŃA�b�v���[�h���Ă��������B</font><br>");
}else{
$("img#uploadfile_4").remove();
//�V�K�t�@�C�����͏��
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

/*---------------------------------------------uploadfile_4-------------------------------------------------------------------------*/

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
//data URL���擾
var dataURL = reader.result;
//data URL��w�i�ɐݒ�
$("img#uploadfile_5").attr("src",dataURL);
//data URL��localStorage�ɕۑ�
localStorage.background = dataURL;
}

if(Number((file.size/1024)/1024).toFixed(2)>500){
$("span#uploadfile_5").html("<font color='red'>�t�@�C���T�C�Y��500MB�ȓ��Ɏ��߂ĉ������B</font><br>");
}else if(!file_type.match("image/")){
$("span#uploadfile_5").html("<font color='red'>�摜�`���ŃA�b�v���[�h���Ă��������B</font><br>");
}else{
$("img#uploadfile_5").remove();
//�V�K�t�@�C�����͏��
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
/*---------------------------------------------uploadfile_5-------------------------------------------------------------------------*/


// �폜�{�^���̈�U�S�������A�z�u������
$('#file_list input[type="button"]').remove();
len_list++;

for (var i = 0; i < len_list; i++) {
var new_btn = '<input type="button" value="CANCEL">';
$('#file_list > li').eq(i).append(new_btn); 
}
}
);

// �폜�{�^�����������ꍇ�̏���
$(document).on('click', '#file_list input[type="button"]', 

function(ev) {
// �i�ړ��͗����폜
var idx = $(ev.target).parent().index();
$('#file_list > li').eq(idx).remove();
var len_list = $('#file_list > li').length;

// ���͗����ЂƂɂȂ�Ȃ�A�폜�{�^���͕s�v�Ȃ̂ŏ���
if (len_list == 1) $('#file_list input[type="button"]').remove();

// ���͗��̔ԍ���U�蒼��
for (var i=0; i<len_list; i++) {
$('#file_list > li').eq(i).children('input[type="file"]').attr('name', 'upload_file[]');
	}
	});
});