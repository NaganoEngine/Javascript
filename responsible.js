// --- ���[�U�G�[�W�F���g�擾 -----------------------------
var device = navigator.userAgent.toLowerCase();
// --- �X�}�[�g�t�H������ ---------------------------------
if(
window.screen.width < 500){
window.location.href = 'http://antiraser.info/devices/index.php'; 
}else if(
((device.indexOf('iphone') > 0)  && (device.indexOf('ipad') == -1)) ||
(device.indexOf('ipod') > 0) ||
((device.indexOf('android') > 0) && (device.indexOf('mobi') > 0))  ||
((device.indexOf('windows') > 0) && (device.indexOf('phone') > 0)) ||
((device.indexOf('firefox') > 0) && (device.indexOf('mobi') > 0))  ||
(device.indexOf('nexus 4') > 0) ||
(device.indexOf('nexus 5') > 0) ||
(device.indexOf('nexus 6') > 0) ||
(device.indexOf('blackBerry') > 0)
){
// �X�}�[�g�t�H���̏���

}
// --- �^�u���b�g���� ------------------------------------
else if(
(device.indexOf('ipad') > 0) ||
((device.indexOf('android') > 0) && (device.indexOf('tablet') > 0)) ||
((device.indexOf('windows') > 0) && (device.indexOf('touch') > 0))  ||
((device.indexOf('firefox') > 0) && (device.indexOf('tablet') > 0)) ||
(device.indexOf('nexus 7') > 0)  ||
(device.indexOf('nexus 9') > 0)  ||
(device.indexOf('nexus 10') > 0) ||
(device.indexOf('kindle') > 0)   ||
(device.indexOf('silk') > 0)
){

// �^�u���b�g�̏���
}
// --- �g�ѓd�b�i�K���P�[�j ------------------------------
else if(
(device.indexOf('docomo') > 0) ||
(device.indexOf('up.browser') > 0) ||
(device.indexOf('softbank') > 0) ||
(device.indexOf('j-phone') > 0) ||
(device.indexOf('mod-') > 0) ||
(device.indexOf('willcom') > 0) ||
(device.indexOf('emobile') > 0)
){
// �K���P�[�̏���
}
