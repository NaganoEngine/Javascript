
jQuery(document).ready(function($) {
  var prefix_file_list = 'file_list_'; 
// �i�ړ��͗���name�����̐ړ���

// "�i�ڂ̒ǉ�"�{�^�����������ꍇ�̏���
	
$('#btn_add').click(function(){
// �i�ړ��͗���ǉ�
var len_list = $('#file_list > li').length;
var new_list = '<li><input type="file"  name="file_contents[]"></li>';
if(len_list == 5)
{
return false;
}
$('#file_list').append(new_list);


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
$('#file_list > li').eq(i).children('input[type="file"]').attr('name', 'file_contents[]');
	}
	});
});