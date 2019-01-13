
jQuery(document).ready(function($) {
  var prefix_file_list = 'file_list_'; 
// 品目入力欄のname属性の接頭辞

// "品目の追加"ボタンを押した場合の処理
	
$('#btn_add').click(function(){
// 品目入力欄を追加
var len_list = $('#file_list > li').length;
var new_list = '<li><input type="file"  name="file_contents[]"></li>';
if(len_list == 5)
{
return false;
}
$('#file_list').append(new_list);


// 削除ボタンの一旦全消去し、配置し直す
$('#file_list input[type="button"]').remove();
len_list++;

for (var i = 0; i < len_list; i++) {
var new_btn = '<input type="button" value="CANCEL">';
$('#file_list > li').eq(i).append(new_btn); 
}
}
);

// 削除ボタンを押した場合の処理
$(document).on('click', '#file_list input[type="button"]', 

function(ev) {
// 品目入力欄を削除
var idx = $(ev.target).parent().index();
$('#file_list > li').eq(idx).remove();
var len_list = $('#file_list > li').length;

// 入力欄がひとつになるなら、削除ボタンは不要なので消去
if (len_list == 1) $('#file_list input[type="button"]').remove();

// 入力欄の番号を振り直す
for (var i=0; i<len_list; i++) {
$('#file_list > li').eq(i).children('input[type="file"]').attr('name', 'file_contents[]');
	}
	});
});