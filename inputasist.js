//フォームinput要素
$(function(stop){
stop=document.getElementById("send1p").disabled=true;

$("label.taskcheck,input[name='client_task1p[]']:checkbox").click(function(){
$("label.taskcheck").css("background-color","");
$("span#task_warning").text('※下記を選択してください').css("background-color","orange");

$("input[name='client_task1p[]']:checked").each(function(){
$("label[for='"+$(this).attr("id")+"']")
                        .css("background-color","#CAFFCA");
$("span#task_warning").text("OK").css("background-color","#80FFFF").show();
});
});

$("label.casecheck,input[name='client_case1p[]']:checkbox").click(function(){
$("label.casecheck").css("background-color","");
$("span#case_warning").text('※下記を選択してください').css("background-color","orange");

$("input[name='client_case1p[]']:checked").each(function(){
$("label[for='"+$(this).attr("id")+"']")
                        .css("background-color","#CAFFCA");
$("span#case_warning").text("OK").css("background-color","#80FFFF").show();
});
});

$("label.snslabel,input[name='client_contact1p[]']:checkbox").click(function(){
$("label.snslabel").css("background-color","");
$("input[name='client_contact1p[]']:checked").each(function(){
$("label[for='"+$(this).attr("id")+"']")
                        .css("background-color","#CAFFCA");
});
});
});//CHECKBOX_VALI_END

$(function(){
$("select[name='deadline']").change(function(){
if($(":selected").attr("value")){
$("select[name='deadline']").after($("span#deadline_warning").text("OK").css("background-color","#80FFFF")).show();
}else{
$("br#point3").after($("span#deadline_warning").text('※下記を選択してください').css("background-color","orange")).show();
}
});
});//Select_Deadline_END


$(function(){
$("input.asistjs").one("focus",function(){
$(this).val("").css("background-color","#F1B756");
}).blur(function(){
if($(this).val()!==""){
$(this).css("background-color" ,"#F1B756");
}else{
$(this).val("").css("background-color","#FFF");
$(this).one("focus",function(){
$(this).val("").css("background-color","#F1B756");
});
}
});
});

$(function(){
$("input#personseikana").val("");
$("input#personseikana").on("keypress",function(){
}).blur(function(){
kana= /^[ｦ-ﾟ]+$/g;
kanau= /^[\uff66-\uff9f]+$/g;
if($("input#personseikana").val().replace(kanau,"")!="" && $("input#personseikana").val().length<=15){
$("br#point").after($("span#kana_sei_asist").text("※半角カナで姓フリガナを入力してください").css("background-color","yellow")).show();
}else{
$("input#personseikana").after($("span#kana_sei_asist").text("OK").css("background-color","#80FFFF")).show();
if($("input#personseikana").val().length<=0){
$("br#point").after($("span#kana_sei_asist").text("※姓カナを入力してください").css("background-color","#0F0")).show();
}
}
});
});
$(function(){
$("input#personmeikana").val("");
$("input#personmeikana").on("keypress",function(){
}).blur(function(){
kana= /^[ｦ-ﾟ]+$/g;
if($("input#personmeikana").val().replace(kana,"")!="" && $("input#personmeikana").val().length<=15){
$("span#kana_sei_asist").after($("span#kana_mei_asist").text("※半角カナで名フリガナを入力してください").css({
backgroundColor:"yellow",
position:"relative",
left:"5px"
})).show();
}else{
$("input#personmeikana").after($("span#kana_mei_asist").text("OK").css("background-color","#80FFFF")).show();
if($("input#personmeikana").val().length<=0){
$("span#kana_sei_asist").after($("span#kana_mei_asist").text("※名カナを入力してください").css({
backgroundColor:"#0F0"
})).show();
}
}
});
});
$(function(){
$("input#personsei").val("");
$("input#personsei").on("keypress",function(){
}).blur(function(){
japanese=/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/g;
if($("input#personsei").val().replace(japanese,"")!="" && $("input#personsei").val().length<=10){
$("br#point2").after($("span#kanji_sei_asist").text("※全角漢字で姓を入力してください").css("background-color","yellow")).show();
}else{
$("input#personsei").after($("span#kanji_sei_asist").text("OK").css("background-color","#80FFFF")).show();
if($("input#personsei").val().length<=0){
$("br#point2").after($("span#kanji_sei_asist").text("※姓を入力してください").css("background-color","#0F0")).show();
}
}
});
});
$(function(){
$("input#personmei").val("");
$("input#personmei").on("keypress",function(){
}).blur(function(){
japanese=/^[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]+$/g;
if($("input#personmei").val().replace(japanese,"")!="" && $("input#personmei").val().length<=10){
$("span#kanji_sei_asist").after($("span#kanji_mei_asist").text("※全角漢字で名を入力してください").css({
backgroundColor:"yellow",
position:"relative",
left:"5px"
})).show();
}else{
$("input#personmei").after($("span#kanji_mei_asist").text("OK").css("background-color","#80FFFF")).show();
if($("input#personmei").val().length<=0){
$("span#kanji_sei_asist").after($("span#kanji_mei_asist").text("※名を入力してください").css({
backgroundColor:"#0F0"
})
).show();
}
}
});
});//Name_Check

$(function(){
$("input#client_mail").val("");
$("input#client_mail").on("keypress",function(){
}).blur(function(){
pat=/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
if($("input#client_mail").val().match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i)===null && $("input#client_mail").val()!=""){
$("span#mail_asist").text("※正しいアドレス形式で入力してください").css("background-color","yellow").show();
}else{
$("span#mail_asist").text("CLEAR").css("background-color","#80FFFF").show();
if($("input#client_mail").val().length<=0){
$("span#mail_asist").text("※メールアドレスを入力してください").css("background-color","#0F0").show();
}
}
});
});//Mail_Check

$(function(){
$("input#reconfirm_mail").val("");
$("input#reconfirm_mail").on("keypress",function(){
$("span#recheck_asist").hide();
});
$("input#reconfirm_mail").on("blur",function(){
if($("input#client_mail").val()!=$("input#reconfirm_mail").val()){
$("span#recheck_asist").text("※上記と同一アドレスを入力してください").css("background-color","yellow").show();
}else{
$("span#recheck_asist").text("CLEAR").css("background-color","#80FFFF").show();
document.getElementById("send1p").disabled=false;

if($("input#reconfirm_mail").val().length<=0){
$("span#recheck_asist").text("※メールアドレスを再度入力してください").css("background-color","#0F0").show();
}
}
});
});//Mail_W_Check

$(function(){
$("input#phone_number").on("keypress",function(){
}).blur(function(){
if($("input#phone_number").val().match(/^[\d]+$/g)===null){
$("br#point5").before($("span#phone_asist").text("※半角数字のみで電話番号を入力してください").css({visibility:"visible",backgroundColor:"yellow"}));
}else{
$("input#phone_number").after($("span#phone_asist").text("OK").css("background-color","#80FFFF"));
}
if($("input#phone_number").val().length<=0){
$("span#phone_asist").css({visibility:"hidden",backgroundColor:""});
}
});
});//Phone_Check

$(function(){
$("input#client_account1p").on("keypress",function(){
}).blur(function(){
if($("input#client_account1p").val().length>30){
$("span#account_asist").css("visibility","visible");
}else{
$("span#account_asist").css("visibility","hidden");
}
});
});//Sns_APP_CHECK


$(function(){
$("input#client_url1p").on("keypress",function(){
}).blur(function(){
urlp_1=/^http:\/\/([\w\.\W]+)\.([\w\.\W]+)$/g
urlp_2=/^https:\/\/([\w\.\W]+)\.([\w\.\W]+)$/g
if($("input#client_url1p").val().match(urlp_1)===null && $("input#client_url1p").val().match(urlp_2)===null){
$("span#hpurl_asist").text("※正しくURLをを入力してください").css({visibility:"visible",backgroundColor:"yellow"});
}
else{
$("span#hpurl_asist").text("CLEAR").css({visibility:"visible",backgroundColor:"#80FFFF"}).show();
}
if($("input#client_url1p").val().length<=0){
$("span#hpurl_asist").css("visibility","hidden");
}
});
});//URL_Check


$(function(){
$("textarea.asistjs").text("お問い合わせ内容詳細").css("color","#666");
$("textarea.asistjs").one("focus",function(){
$(this).val("").css("background-color","#F1B756");
}).blur(function(){
if($(this).val()!==""){
$(this).css("background-color" ,"#F1B756");
}else{
$(this).val("").css("background-color","#FFF");
$(this).one("focus",function(){
$(this).val("").css("background-color","#F1B756");
});
}
});
});//Inquery_Asist

$(function(){
$("textarea.asistjs").focus(function(cas){
cas=$("span#strcounter").html(500-$(this).val().length).show();
}).blur(function(we){
if($(this).val().length-1>=500){
$("span#strcounter").css("background-color","#F00");
we=document.getElementById("send1p").disabled=true;
}else{
document.getElementById("send1p").disabled=false;
$("span#strcounter").css("background-color","#FFE4CA");
}
if($(this).val().length<=0){
$("span#strcounter").hide();
}
});
});//字数と送信制限

$(function(){
$("textarea.asistjs").keydown(function(maxlength) {
if($(this).val().length-1>=500){
maxlength.stopPropagation();
alert("500文字以上入力できません");
return false;
}else{
$("span#strcounter").html(500-$(this).val().length-1);
}
});
});//TEXTAREA_最大文字数と入力制限

$(function(){
$(window).load(function(){
$('input:checkbox').prop('checked',false);
$("option").attr("selected",false);
});
});//load_checkbox_all_false

$(function(){
$("input#send1p").mouseover(function(er){
if( $("input#client_mail").val().length<=0 ){
er=$("input#send1p").after("<h2 id='warn'><font color='red'>"+"必須項目を入力してください"+"</font></h2>");
}else{
$("h2#warn").remove();
}
});
});//disabled_check_message;
