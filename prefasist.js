
var
spre="select#showpref";
//都道府県オプションID

sht  =  "table#tp";
afte ="<font face='ＭＳ Ｐ明朝, MS PMincho,ヒラギノ明朝 Pro W3, Hiragino Mincho Pro, serif'><table width='600' height='500' border='1' id='tp' align='center' cellpadding='5' rules='all' bgcolor='#E7F7FE'><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>北海道</td><td><a href='#' id='a1'>北海道</a></td><td></td><td></td><td></td><td></td><td></td><td><a href='#' id='a0'>閉じる</a></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>東北</td><td><a href='#' id='a2'>青森県</a></td><td><a href='#' id='a3'>岩手県</a></td><td><a href='#' id='a4'>宮城県</a></td><td><a href='#' id='a5'>秋田県</a></td><td><a href='#' id='a6'>山形県</a></td><td><a href='#' id='a7'>福島県</a></td><td></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>関東</td><td><a href='#' id='a8'>茨城県</a></td><td><a href='#' id='a9'>群馬県</a></td><td><a href='#' id='a10'>栃木県</a></td><td><a href='#' id='a11'>埼玉県</a></td><td><a href='#' id='a12'>千葉県</a></td><td><a href='#' id='a13'>東京都</a></td><td><a href='#' id='a14'>神奈川県</a></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>北陸</td><td><a href='#' id='a15'>富山県</a></td><td><a href='#' id='a16'>石川県</a></td><td><a href='#' id='a17'>福井県</a></td><td></td><td></td><td></td><td></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>甲信越</td><td><a href='#' id='a18'>新潟県</a></td><td><a href='#' id='a19'>山梨県</a></td><td><a href='#' id='a20'>長野県</a></td><td></td><td></td><td></td><td></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>東海</td><td><a href='#' id='a21'>岐阜県</a></td><td><a href='#' id='a22'>静岡県</a></td><td><a href='#' id='a23'>愛知県</a></td><td><a href='#' id='a24'>三重県</a></td><td></td><td></td><td></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>関西</td><td><a href='#' id='a25'>滋賀県</a></td><td><a href='#' id='a26'>京都府</a></td><td><a href='#' id='a27'>大阪府</a></td><td><a href='#' id='a28'>兵庫県</a></td><td><a href='#' id='a29'>奈良県</a></td><td><a href='#' id='a30'>和歌山県</a></td><td></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>中国</td><td><a href='#' id='a31'>鳥取県</a></td><td><a href='#' id='a32'>島根県</a></td><td><a href='#' id='a33'>岡山県</a></td><td><a href='#' id='a34'>広島県</a></td><td><a href='#' id='a35'>山口県</a></td><td></td><td></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>四国</td><td><a href='#' id='a36'>徳島県</a></td><td><a href='#' id='a37'>香川県</a></td><td><a href='#' id='a38'>愛媛県</a></td><td><a href='#' id='a39'>高知県</a></td><td></td><td></td><td></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>九州</td><td><a href='#' id='a40'>福岡県</a></td><td><a href='#' id='a41'>佐賀県</a></td><td><a href='#' id='a42'>長崎県</a></td><td><a href='#' id='a43'>熊本県</a></td><td><a href='#' id='a44'>大分県</a></td><td><a href='#' id='a45'>宮崎県</a></td><td><a href='#' id='a46'>鹿児島県</a></td></tr><tr><td class='leftsele' width='100' bgcolor='#E3E3E3' align='center'>沖縄</td><td><a href='#' id='a47'>沖縄県</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table></font>";

$(function(){
$(document).on("click",spre,function(){
$(this).after(afte);
});
});
$(function(){
$(spre).change(function(){
if($(":selected").attr("id")=="a0" && $(":selected").val()=="disabled"){
$(spre).after(afte);
}else{
$(sht).detach(sht);
}
});
});
$(function(){
$(document).delegate('a','click', function(){
$(sht).detach(sht);
$("option[id="+$(this).attr('id')+"]").attr("selected","true");
});
return false;
});
